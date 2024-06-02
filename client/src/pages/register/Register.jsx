import "./register.scss"
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className="register">
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
                        <button>Login</button>
                    </form>

                </div>
            </div>

        </div>
    )
}
export default Register;