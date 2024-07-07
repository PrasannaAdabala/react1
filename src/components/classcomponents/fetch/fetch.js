import axios from "axios";
import { Component } from "react";

export class Productlisting extends Component{
    state={
        Productlisting:[],
        loading:false,
        error:null  
    }
    componentDidMount(){
        this.datafetch()
        }
        //  datafetch=()=>{
        //     this.setState({
        //         loading:true
        //     })
        //     fetch("https://fakestoreapi.com/products")
        //     .then((response)=>response.json())
        //     .then((response)=>{
        //         this.setState({
        //             Productlisting:response,
        //             loading:false

        //         })
        //     })
        // }
        
       datafetch=async ()=>{
        this.setState({
                    loading:true
                })
         try{      
        const response1=await axios.get("https://fakestoreapi.com/products")
        console.log( response1,"response1")
        if(response1.status===200){
        
                    this.setState({
                        Productlisting:response1.data,
                        loading:false
    
                    })
        }
             } catch(err){
        console.error(err)
        this.setState({
                       error:"the server is busy"
    
                    })
    }finally{
        this.setState({
            loading:false

         })

        }
}

  
    render(){
        return(
            <div>
                 <h3>Productlisting</h3>
                {
                    this.state.loading?(<h3>please wait data is coming....  </h3>):(
                        <div>
                              {
                    this.state.Productlisting.map((eachproduct)=>{
                        return(
                            <div key={eachproduct.id}>
                                <h3>{eachproduct.title}</h3>
                                <h3>{eachproduct.description}</h3>
                                <img src={eachproduct.image} height={100} width={100} alt="{eachproduct.title}"/>
                            </div>
                        )
                    })
    }

                        </div>
                    )
                }
               
              
              
            </div>
        )
    }
}

