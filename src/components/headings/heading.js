 export const Heading1=()=>{
    return <h1>Hello World1</h1>
}
  export const Heading2=(prop)=>{
    console.log(prop,"prop")
    const {children}=prop
    return( 
    <><h2>{children}</h2></>
    )
}