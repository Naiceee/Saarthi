import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigate("/profile"); // Redirect to profile page
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <h1 className="text-5xl p-10 text-center font-bold">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-8 items-center">
        <label className="input input-bordered flex items-center gap-2">
          Email ID 
          <input
            type="email"
            className="grow w-96"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Password
          <input
            type="password"
            className="grow w-96"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="btn btn-wide bg-blue-900 text-gray-100 hover:bg-indigo-700"
        >
          Login
        </button>
        <div>
          <NavLink to={"/signup"}>Don't have an account?</NavLink>
        </div>
      </form>
    </>
  );
}

export default LoginForm;