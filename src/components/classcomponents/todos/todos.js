import React, { Component } from "react";
// import Buttoncomponent from "../../button/button";

 export class Todos extends Component{
   state={
    Todos:["wakeup 5am","goodmorning"],
   };
   buttonhandler=()=>{
   this.setState({
    Todos:[...this.state.Todos, "not goodmorning"],
   });
   };
   updateHandler=(index)=>{
    // console.log(index,this.state.Todos)
    let Newtodos=this.state.Todos;
    Newtodos[index]="wakeup 6am"
    this.setState({
        Todos:Newtodos
    })

   }
   deleteHandler=(index)=>{
    let newtodos=this.state.Todos.filter((eachdata,i)=>index!==i);
      this.setState({
        Todos:newtodos
      })
     }

    render(){
        return(
        <div>
            <ol>
           {this.state.Todos.map((eachtodo,index)=>{
              return(
                <>
                <li>{eachtodo}</li>
              <button onClick={()=>this.updateHandler(index)}>update</button>
              <button onClick={()=>this.deleteHandler(index)}>delete</button>
              </>

              ) 
    })}
     </ol>
      <button onClick={this.buttonhandler}>clickme</button>
            
        </div>
    );
}
    
    
}


