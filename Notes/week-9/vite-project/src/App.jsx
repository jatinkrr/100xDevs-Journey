import { useState } from "react"

function App() {
  return (
    <div style={{backgroundColor:"#dfe6e9", height:"100vh" ,padding:"0px", margin:"0px" }} >
    

    <div style={{display:"flex" , border:"1px solid black", justifyContent:"center" ,}}>
      <div style={{paddingRight:"20px"}}>
         <div>
        <Navbar />
      </div>
    </div>
     
    <div>
         <div>
        <Navbar />
      </div>
    </div>
     
    </div>


    <div style={{display:"flex", justifyContent:"center", }}>
      <div style={{paddingRight:"30px", paddingTop:"10px"}}>
      <div >
        <ProfileCard />
      </div>
      </div>
   

      <div >
         <div>
          <PostComponent />
         </div>     
        <div>
          <PostComponent />
        </div>     
        <div>
          <PostComponent />
        </div>     
        <div>
          <PostComponent />
        </div>     
        
      </div>
  </div>
{/*     flexbox end here */}
  


    {/* <div>
      <div>
        <ToggleMsg />
      </div>
    </div> */}
</div>
  )
}

function PostComponent (){
  return (
    <div style={{ backgroundColor:"white" , borderRadius:10, marginTop:"10px", padding:"10px" , width:"300px", height:"100px"}} >
    <div style={{display:"flex" }}>
      <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/paid_course3/2023-11-10-0.3523174787735883.jpeg"} style={{width:40 , borderRadius:10}} />
    <div style={{fontSize:10 , marginLeft:20} }>
    <div><b>harkirat singh</b></div>
    <div>12000</div>
    <div>12m</div>
    
    </div>
    </div>

<div style={{fontSize:12 }}>
  What to know how to win big? check out how these folks won $6000 in bounties.
</div>

    </div>
    
    
  )
}

function ProfileCard(){
  return (
    <div style={{border:"2px solid black", padding:"20px"}}>
      <div style={{display:"flex" }} >
        <div>
          <div>
            <img src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" style={{height:"50px", alignItems:"center"}}></img>
          </div>
        </div>
      </div>
      <div>
        <div>
          <b>Harkirat singh</b>
        </div>
        <div>
          profile view : 41504
         
        </div>
        <div> post impression : 1,311</div>
        </div>
        
    </div>
  )
}


// function ToggleMsg(){
//   let [isvisible, setisvisibe] = useState(true);

//   function toggle(){
//     setisvisibe(!isvisible);
//   }

//   return (
//     <div>
//       <button onClick={toggle}>Toggle msg</button>
//       {isvisible && <p>this msg is conditionally toggled</p>}
//     </div>
//   )

// }

function Navbar(){
  let [notification, setnotifiaction] = useState(0)

  function showNotification(){
    setnotifiaction(notification + 1)
  }

  return(
    <div>
      <button onClick={showNotification}> notification</button>
      {notification}
    </div>
  )

}




export default App























// function App(){
//   return (
//     <div style={{backgroundColor:"#dfe6e9", height:"100vh"}}>
//       <div style={{display:"flex", justifyContent:"center"}}>
//         <div>
//      <div>
//       <PostComponent />
//      <br />
//      </div>
//      <div>
//       <PostComponent />
//      <br />
//      </div>
//      <div>
//       <PostComponent />
//      <br />
//      </div>
//      </div>
//     </div>
//     </div>
//   )
// }

// function PostComponent(){
//   return (
//     <div style = {{backgroundColor:"white"}}>
//       <div style={{display:"flex"}}>

//        <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/paid_course3/2023-11-10-0.3523174787735883.jpeg"} style={{height:"20px", borderRadius:"10px", marginRight:"10px"}}/>
//     <div>
//     <div>
//           <b>Harkirat</b>
//       </div>
//       <div>
//           IIT manesar
//       </div>
//       <div>
//          12 min ago
//       </div>
//     </div>
//       </div>
// <div>

// </div>

//  What to know how to win big? check out how these folks won $6000 in bounties.
//     </div>
//   )
// }

// export default App

