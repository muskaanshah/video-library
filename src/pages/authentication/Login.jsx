import { Link } from "react-router-dom";
import "./authentication.css";

function Login() {
	return (
		<div className="container-body color-white centered">
			<div className="card-authentication bg-grey-dark borderradius-0-5 mt-2">
				<p className="text-center fw-500 fs-1-25">Login</p>
				<form>
					<span className="input-box">
						<input
							type="email"
							id="email-address"
							className="input-text input-authentication p-0-5 fs-0-9 mb-1"
							placeholder="Email Address *"
							required
						/>
					</span>
					<span className="input-box">
						<input
							type="password"
							id="Password"
							className="input-text input-authentication p-0-5 fs-0-9 mb-1"
							placeholder="Password *"
							required
						/>
					</span>
					<input
						type="submit"
						value="Login"
						className="btn bg-primary fw-500 fs-0-9 mb-1 width-100 color-black"
					/>
				</form>
				<div className="centered">
					<Link to="/signup" className="fs-0-9 color-white text-none centered">
						Create new account
						<span className="material-icons-outlined"> navigate_next </span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export { Login };
