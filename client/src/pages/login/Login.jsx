import { useContext } from "react";
import "./login.scss"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const Login = () => {
    const {login}= useContext(AuthContext)
    const handleLogin =()=>{
        login();
      
    }
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span>Don't have an account?</span>

                    <button>Register</button>

                </div>

                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>

                </div>
            </div>

        </div>
    )
}
export default Login;