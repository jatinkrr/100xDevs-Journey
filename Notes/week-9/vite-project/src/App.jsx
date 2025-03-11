
function App() {
  return (
    <div style={{backgroundColor:"#dfe6e9", height:"100vh"}} >
    <div style={{display:"flex" , justifyContent:"center"}}>
      <div>
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
</div>
  )
}

function PostComponent (){
  return (
    <div style={{ backgroundColor:"white" , borderRadius:10, marginTop:"10px", padding:"10px"}} >
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
export default App
