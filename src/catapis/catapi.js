// import axios from "axios"
// import { useEffect, useState } from "react"

// const Cat=()=>{
//     const[catdetails,setcatdetails]=useState([])
//     const[buttonclick,setbuttonclick]=useState([])
//     useEffect(()=>{
//         Fetchdata()
//     },[])
//     const Fetchdata=async()=>{
//    const response=await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys&limit=10")
//    console.log(response.data,"response")
//    setbuttonclick(response.data)
   

//     }
//    const buttonhandler=()=>{
//     if (buttonclick.length > 0) {   
//     setcatdetails(buttonclick)
//    }
// }
    
//     return(
//         <div>
//             <h1>catdetails</h1>
//            {
//             catdetails.map((eachdata,index)=>
//                 <div key={index}>
//                 <h1>{eachdata.id}</h1>
//             <img src={eachdata.url} height={100}width={100} alt="cat" />
//             </div>
//             )
//            }
//            <button onClick={buttonhandler}>clike here</button>

          
//         </div>
//     )
    
// }

//  const Table=(catdetails)=>{
   
//    return(
//     <>
//     <title>Bootstrap Example</title>
//     <meta charSet="utf-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <link
//       rel="stylesheet"
//       href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
//     />
//     <div className="container">
//     <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>image</th>
//             <th>add data</th>
//           </tr>

//         </thead>
//         <tbody>
//         {
//             catdetails.map((eachdata,index)=>
//                 <div key={index}>
//                 <h1>{eachdata.id}</h1>
//             <img src={eachdata.url} height={100}width={100} alt="cat" />
//             </div>
//             )
//            }
        
//         </tbody>
//       </table>
//     </div>
//   </>
  
//    )
// }
// export default Cat;
import axios from "axios";
import { useEffect, useState } from "react";

const Cat = () => {
  const [catDetails, setCatDetails] = useState([]); // Store added cats
  const [currentCat, setCurrentCat] = useState(null); // Store currently fetched cat detail

  // Fetch a new cat detail from the API
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys&limit=1");
      console.log(response.data, "response");
      setCurrentCat(response.data[0]); // Set the first cat from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Add the fetched cat detail to the table
  const addCatToTable = () => {
    if (currentCat) {
      setCatDetails((prevDetails) => [...prevDetails, currentCat]);
      setCurrentCat(null); // Clear the current cat after adding
      fetchData(); // Fetch a new cat detail for the next click
    }
  };

  // Fetch initial cat detail on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Cat Details</h1>
      {/* Display fetched cat detail */}
      {currentCat && (
        <div>
          <h3>Fetched Cat:</h3>
          <img src={currentCat.url} height={100} width={100} alt="cat" />
          <button onClick={addCatToTable}>Add Data to Table</button>
        </div>
      )}
      <Table catDetails={catDetails} addCat={addCatToTable} />
    </div>
  );
};

// Table component to display added cat details
const Table = ({ catDetails, addCat }) => {
  // Add a new cat to the table when clicked
  const handleAddData = (index) => {
    addCat();
  };

  return (
    <>
      <title>Bootstrap Example</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
      <div className="container">
        <h2>Cat Table</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {catDetails.map((eachData, index) => (
              <tr key={index}>
                <td>{eachData.id}</td>
                <td>
                  <img src={eachData.url} height={50} width={50} alt="cat" />
                </td>
                <td>
                  <button onClick={() => handleAddData(index)}>Add Data</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cat;




