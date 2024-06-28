import  BasicExample from "../buttonbootstrap/bootstrap2"

const Bootsrap=()=>{
  return(
    <>
  <title>Bootstrap 5 Example</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        <h3>Column 1</h3>
      <BasicExample/>
      </div>
      <div className="col-sm-4">
        <h3>Column 2</h3>
        <BasicExample/>
       
      </div>
      <div className="col-sm-4">
        <h3>Column 3</h3>
       <BasicExample/>
      </div>
    </div>
  </div>
</>

   
  )

}
export default Bootsrap
