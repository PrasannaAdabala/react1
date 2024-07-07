import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';


export function UseEffectExample(){
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
const fetchData=async()=>{
    try {
        const response1 = await axios.get("https://dummyjson.com/recipes");
        console.log(response1, "response1");
  
        if (response1.status === 200) {
          setData(response1.data.recipes);
        }
      } catch (err) {
        console.error(err);
      }

};
<TableUseEffect/>
}

export function TableUseEffect({
    tableRows=[
    
  
  ]
  }) {
    return (
        <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
        {tableRows.map((each,index) => {  
          return(
            <>
            <tr>
              <td>{index+1}</td>
              <td>{each.name}</td>
              <td>{each.ingredients}</td>
              <td>{each.instructions}</td>
            </tr>
            </>
        );
        })}
        </tbody>
      </Table>

      </>
    );
  }