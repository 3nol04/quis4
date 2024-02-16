import {Link} from 'react-router-dom' 

const LoginPage =()=>{



    return(
    
          <div>
                <img src ="https://th.bing.com/th/id/OIG3.phQgNv0ZuaQAnrOQJ9vA?w=1024&h=1024&rs=1&pid=ImgDetMain" 
                style={{
                   height:"100vh",
                   width:"100%",
                   position: "absolute",}}/>
                <div class="" style={{
                              height:"25em",
                              width:"28em",
                              top:"15%",
                              display:"flex",
                              justifyContent: "center",
                              alignItems: "center",
                              left:"35%",
                              backdropFilter: "blur(3px)",
                              position: "absolute",
                              fontFamily : "serif",
                              boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
                        }}>
                    <div className="" 
                        style={{width:"25em",
                        fontFamily: "serif",
                        }}>
                    <div class="mb-3 row">
                          <label for="staticEmail" class="form-label">Email</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control " id="exampleFormControlInput1"/>
                        </div>
                    </div>
                     <div class="mb-3 row">
                          <label for="inputPassword" class="form-label">Password</label>
                          <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword"/>
                    </div>
                            <div className="flex justify-content-center align-items-center " style={{margin:"20px", left:"50px"}} >
                                  <button type="submit" class="btn btn-primary d-flex justify-content-center align-items-center"  style={{width:"20em",top:"20px", left:"20px", position:"relative"}}>
                                    <img src="https://img.icons8.com/ios/50/000000/enter-2.png"style={{ width:"20px" ,height:"20px"}} alt="enter-2"/>
                                    <p className="ms-2" style={{ position:"relative", margin:"0px"}}>Login</p>
                                  </button>
                                  <p style={{position:"relative", margin:"19px ", color:"black"}}>Belum memiliki akun <Link to="/register" style={{color:"rgb(66, 138, 245)"}}>Register</Link></p>
                            </div>
                    </div>
                  </div>
                </div> 
            `</div>

    )
}
export default LoginPage 