// export const Parentlistordered=()=>{
//     return(
//         <ol>
//            <li>Apple</li>
//            <li>Banana</li>
//         </ol>
//     )
// }
// export const Parentlistunordered=()=>{
//     return(
//         <ul>
//             <li>Apple</li>
//             <li>Banana</li>
//         </ul>
//     )
// }
export  const Items=()=>{
    const Teams=[
        {
        teamName: "rcb",
        teamplayers: ["dhoni","virat","prasanna"],
        won:5,
        teamlogo:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        teamName: "csk",
        teamplayers: ["mounika","bhargavi","prasanna1"],
        won:3,
        teamlogo:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    }
        
    ]
    function filterdata(Teams){
        const newteams=Teams.filter((eachteam)=>eachteam.won>=5)
        return newteams
    }
   return(
    <div>
        {
           filterdata(Teams).map((eachteam)=>{
                return (
                    <div>
                        
                        <h1>{eachteam.teamName}</h1>
                        <img src={eachteam.teamlogo} alt="shirt" height={100} width={100}/>
                       
                        {
                            eachteam.teamplayers.map((eachplayer)=>{
                                return(
                                    <div>
                                        <h2>{eachplayer}</h2>
                                        
                                        </div>
                                )
                            })
                        }
                        <h3>{eachteam.won}</h3>
                    </div>
                   
                )
                
              
                

            })
        }
    </div>
   )
}