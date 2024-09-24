import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // Here you can handle the login logic, like sending data to a server
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset form (optional)
    setEmail("");
    setPassword("");
  };

  const goToHome = () => {
    navigate("/"); // This will navigate to the home page
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <button className="register-btn">Register Now!</button>
        </div>
      </form>
      <button onClick={goToHome}>🔙</button>
    </div>
  );
}

export default Login;
