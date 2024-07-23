import hocexample from "./hoc"

const Homescreen=(props)=>{
    console.log(props,"props")
    return(
        <div>
            <h1>welcome{props.data.name}</h1>
        </div>
    )
}
export default hocexample(Homescreen)