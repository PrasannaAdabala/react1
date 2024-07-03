//  import Buttoncomponent from "./components/button/button"
// import {Heading1,Heading2} from "./components/headings/heading"
// import {Parentlistordered, Parentlistunordered} from "./components/lists/parentlist"
// import Imagecomponent from "./components/image/imagecomponent"
// import Imagecomponent1 from "./props/props"
// import { Cards } from "./components/cards/cards"
// import {Fruits} from "./components/lists/parentlist"
// import { Items } from "./components/lists/parentlist"
import Buttoncomponent from "./components/button/button"
import { Heading2 } from "./components/headings/heading"
import { Data } from "./components/javascript/data"
import Imagecomponent1 from "./props/props"

// import Bootsrap from "./components/buttonbootstrap/bootstrap1"

// import BasicExample from "./components/buttonbootstrap/bootstrap2"
// import { Imagecomponent } from "./props/props"

//  const App=()=>{
//   const islogin=true
//   return(
    // <div>
    //   {
    //     islogin?(
    //       <>
    //     <Cards/> 
    //     <h3>hi</h3>
    //     </>):(
    //       <>
    //       <h3>hello</h3></> )
    //   }
    // </div>
//     islogin &&
//       <div>
       
//       <Cards/>
        
//       </div>
    
//    )}

//  export default App;
const App=()=>{
  return(
    <div>
      {Data.map((eachproduct)=>{
        return(
          <div>
           <h3>{eachproduct.title}</h3>
           <h2>{eachproduct.category}</h2>
           <h2>{eachproduct.description}</h2>
           <h2>{eachproduct.id}</h2>
           <Imagecomponent1 src={eachproduct.image}  height={100} width={100} alt={eachproduct.title}/>
           <Buttoncomponent 
           text={eachproduct.price}
           bgcolor="red"
           color="black"
           height={30}
           width={70}
           onPress={()=>{}}
           />
           <Heading2>
            <h3>hello prasanna</h3>
            <h3>goodmorning</h3>
            <h3>how r u</h3>
           </Heading2>

          </div>
        )
      }
    
      )}
    </div>
  )
}
  
 


export default App
  