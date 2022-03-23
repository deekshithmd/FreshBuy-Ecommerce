import "./authentication.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const HandleSignup = async (event) => {
    try {
      event.preventDefault();
      const { firstname, lastname, email, pass } = event.target.elements;
      console.log("got");
      const response = await axios.post(`/api/auth/signup`, {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: pass.value,
      });
      console.log(response.data);
      if (response.data.encodedToken) {
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.encodedToken)
        );
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
      console.log("signup")
    }
  };

  return (
    <div className="form">
      <div className="form-data">
        <h2 className="margin-b">SignUp</h2>
        <form onSubmit={HandleSignup}>
          <div className="input input-labeled outlined margin">
            <label className="label">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter First Name"
            />
          </div>
          <div className="input input-labeled outlined margin">
            <label className="label">Last Name</label>
            <input type="text" name="lastname" placeholder="Enter Last Name" />
          </div>
          <div className="input input-labeled outlined margin">
            <label className="label">Email Address</label>
            <input type="email" name="email" placeholder="freshbuy@gmail.com" />
          </div>
          <div className="input input-labeled outlined margin">
            <label className="label">Password</label>
            <input type="password" name="pass" placeholder="******" />
          </div>
          <div className="input input-labeled outlined margin">
            <label className="label">Confirm Password</label>
            <input type="password" name="confirm" placeholder="******" />
          </div>
          <section className="handle">
            <label className="text-md">
              <input type="checkbox" className="margin-r" />I Accept all terms
              and conditions
            </label>
          </section>
          <input
            type="submit"
            className="btn btn-solid-primary margin"
            value="Create New Account"
          />
        </form>
      </div>
    </div>
  );
}
