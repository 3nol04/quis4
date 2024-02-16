import { Link } from "react-router-dom"

const Register =()=>{


    return( 
      <div style={{minHeight : "100vh" , justifyContent : "center", alignItems : "center", display : "flex"
      }}>
         <img src ="https://th.bing.com/th/id/OIG3.phQgNv0ZuaQAnrOQJ9vA?w=1024&h=1024&rs=1&pid=ImgDetMain" 
                style={{
                   height:"100vh",
                   width:"100%",
                   position: "absolute",}}/>
<form className="" style={{width:"25em",fontFamily: "serif" ,position:"absolute", color:"black",backdropFilter: "blur(3px)",padding:"20px", boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)"}}>

  <p className=" d-flex justify-content-center fs-3" >
    Register
  </p>
  <div className="mb-3 fs-6">
    <label for="exampleFormControlInput1" className="form-label">Name</label>
    <input type="text" className="form-control " id="exampleFormControlInput1"/>
    <div id="emailHelp" className="form-text">Plaese enter your name</div>
  </div>
  <div className="mb-3 fs-6">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 fs-6">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>  
  <button type="submit" className="btn btn-primary">register</button>
  <p style={{position:"relative", color:"black"}}>Sudah memiliki akun <Link to="/login" style={{color:"rgb(66, 138, 245)"}}>Login</Link></p>
</form>

      </div>
    )
}

export default Register