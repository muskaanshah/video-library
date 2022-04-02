import { Link } from "react-router-dom";
import "./authentication.css";

function Signup() {
	return (
		<div className="container-body color-white centered">
			<div className="card-authentication bg-grey-dark borderradius-0-5 mt-2">
				<p className="text-center fw-500 fs-1-25">Sign up</p>
				<form>
					<span className="input-box">
						<input
							type="input"
							id="first-name"
							className="input-text input-authentication p-0-5 fs-0-9 mb-1"
							placeholder="First Name *"
							required
						/>
					</span>
					<span className="input-box">
						<input
							type="input"
							id="last-name"
							className="input-text input-authentication p-0-5 fs-0-9 mb-1"
							placeholder="Last Name *"
							required
						/>
					</span>
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
					<span className="input-box">
						<input
							type="password"
							id="Password"
							className="input-text input-authentication p-0-5 fs-0-9 mb-1"
							placeholder="Confirm Password *"
							required
						/>
					</span>
					<input
						type="submit"
						value="Sign up"
						className="btn bg-primary fw-500 fs-0-9 mb-1 width-100 color-black"
					/>
				</form>
				<div className="centered">
					<Link to="/login" className="fs-0-9 color-white text-none centered">
						Already have an account
						<span className="material-icons-outlined"> navigate_next </span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export { Signup };
