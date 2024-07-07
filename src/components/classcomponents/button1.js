import { Component } from "react";
import {Cards} from "../cards/cards"

 export class Classbuttoncomponent extends Component{
    state={
     text1:"subscribe",
     text2:"subscribed",
     issubscribe:"true"
    }
    sethandler=()=>{
     this.setState({
        issubscribe:!this.state.issubscribe
     })
    }
    render(){
        return(
            <div>
                <button onClick={this.sethandler}>
                    {this.state.issubscribe?this.state.text1:this.state.text2}</button>
                {
                    this.state.issubscribe?(
                        <h3>please subsribed if u want the premium content</h3>
                        
                        ):(
                        <>
                        <h3>thanks for subscribing.enjoy the premium content</h3>
                        <Cards/>

                        </>
                )}
               
            </div>
        )
    }
}


