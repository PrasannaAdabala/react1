import styles from "../button.module.css"
const  Buttoncomponent =(prop)=>{
    const {text,bgcolor,color,onPress,height,width}=prop
    return <button onClick={onPress} className="{styles.buttoncss}" style={{backgroundColor:bgcolor,color:color,text:text,height:height,width:width}}>{text}</button>
}
export default Buttoncomponent 