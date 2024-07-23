  
import React, { useEffect, useState } from "react";
import axios from "axios";

const Rep = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    console.log(response.data, "response");
    setRecipes(response.data.recipes);
  };

  const searchhandler = (event) => {
    setSearch(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={ searchhandler}
        style={{ padding: "10px", marginBottom: "20px", width: "100%" }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredRecipes.map((eachrecipe) => (
          <div
            key={eachrecipe.id}
            style={{
              border: "1px solid #ccc",
              width: "20%",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <img
              src={eachrecipe.image}
              height={150}
              width={150}
              alt={eachrecipe.name}
              style={{ borderRadius: "50%", marginBottom: "10px" }}
            />
            <h2>{eachrecipe.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
              {eachrecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ul>
              {eachrecipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rep;

