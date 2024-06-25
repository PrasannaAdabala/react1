import Imagecomponent from "../image/imagecomponent"
import { Heading1 } from "../headings/heading"
import Buttoncomponent from "../button/button"
import { Parentlistordered } from "../lists/parentlist"
import { Parentlistunordered } from "../lists/parentlist"
export const Cards=()=>{
    return(
        <div>
             <Heading1/>
            <Imagecomponent/>
            <Parentlistordered/>
            <Parentlistunordered/> 
            <Buttoncomponent/>
           
        </div>

    )
}