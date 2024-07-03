const Imagecomponent1=(props)=>{
    console.log(props,"props")
    const {src,width,height,alt} = props
    return (
        <img {...props}/>
    )
       
    
};
export default Imagecomponent1