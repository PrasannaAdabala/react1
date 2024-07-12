import axios from "axios";
import { useEffect, useState } from "react";

export const Useeffectexample = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                if (response.status === 200) {
                    setData(response.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const renderCards = () => {
        return data.map((product, index) => (
            <div key={index} style={cardStyle}>
                <img src={product.image} alt={product.title} style={imageStyle} />
                <h3 style={titleStyle}>{product.title}</h3>
                <p style={descriptionStyle}>{product.description}</p>
                <div style={priceStyle}>${product.price.toFixed(2)}</div>
            </div>
        ));
    };

    return (
        <div style={containerStyle}>
            {data.length > 0 ? renderCards() : <p>Loading...</p>}
        </div>
    );
};

const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f8f9fa"
};

const cardStyle = {
    width: "220px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    textAlign: "center",
    transition: "transform 0.2s",
    backgroundColor: "#fff",
};

const titleStyle = {
    fontSize: "1.5rem",
    margin: "10px 0",
    color: "#333"
};

const descriptionStyle = {
    fontSize: "1rem",
    margin: "10px 0",
    color: "#666",
    height: "60px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
};

const priceStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "10px 0",
    color: "#28a745"
};

const imageStyle = {
    maxWidth: "100%",
    maxHeight: "150px",
    objectFit: "contain",
    marginBottom: "10px"
};


cardStyle[':hover'] = {
    transform: "scale(1.05)",
    cursor: "pointer"
};
