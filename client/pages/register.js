import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
import user from "../../server/models/user";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
      if (passwordConfirm === password) {
          try {
              setLoading(true);
              const { data } = await axios.post(`/api/register`, {
                  name,
                  email,
                  password,
              });
              //console.log("REGISTER RESPONSE", data);
              toast("Registration successful. Please login.");
              setName("");
              setEmail("");
              setPassword("");
              setLoading(false);
          } catch (err) {
              toast(err.response.data);
              setLoading(false);
          }
      }else{
          toast('Sorry! Passwords must match to Register');
      }
  };

  return (
    <><h2 ><img className="registerBG"></img>
        <h1 className="jumbotron text-center loginBanner square">Register</h1>
        <div className="topNav">
        <div className="container col-md-4 offset-md-4 pb-5">
          <div className="registerForm">
            <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />

          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />

          <input
            id="pw1"
            type="password"
            className="form-control mb-4 p-4"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="Enter password"
            required
          />
          <input
            id="pw2"
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Confirm password"
            required
          />

          <button
            type="submit"
            className="btn btn-block btn-primary loginButton"
            disabled={!name || !email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>
          </div>
        <p className="text-center p-3 registerAlready">
          <div className="registerAlreadyBio" >Already registered?{" "}</div>
          <Link href="/login">
            <a className="registerLoginBtn">Login</a>
          </Link>
        </p>
              </div>
          </div>
      </h2>
    </>
  );
};

export default Register;
