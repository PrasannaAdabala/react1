import axios from "axios";
import { useEffect, useState } from "react";

const Gender = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    datafetch();
  }, []);

  const datafetch = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data);
      setData(response.data.products); 
    } catch (error) {
        console.log("hi");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {data.length > 0 && <Table data={data} />}
    </div>
  );
};

const Table = ({ data }) => {
  const Style1 = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const Style2 = {
    border: "1px solid black",
    padding: "10px",
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    textAlign: "left",
  };

  const Style3 = {
    border: "1px solid black",
    padding: "8px",
    textAlign: "left",
  };

  return (
    <div className="container">
      <table style={Style1}>
        <thead>
          <tr>
            <th style={Style2}>ID</th>
            <th style={Style2}>Title</th>
            <th style={Style2}>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td style={Style3}>{product.id}</td>
              <td style={Style3}>{product.title}</td>
              <td style={Style3}>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Gender;
