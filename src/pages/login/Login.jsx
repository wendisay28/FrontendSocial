import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Grimmcher</h3>
                    <span className="loginDesc">
                        connect with friends and the world around you on grimmcher.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot password?</span>
                        <button className="loginRegisterButton">create a new Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


