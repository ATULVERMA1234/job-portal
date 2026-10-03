import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Remove extra spaces
    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    // Check name
    if (!name) {
      alert("Please enter your full name.");
      return;
    }

    // Check email
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    // Check password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Check password confirmation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      console.log("Starting registration...");
      console.log("Email:", email);

      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,

        options: {
          data: {
            name: name,
          },
        },
      });

      if (error) {
        console.error("SUPABASE SIGNUP ERROR:", error);
        console.error("Error message:", error.message);
        console.error("Error status:", error.status);

        alert(`Registration failed: ${error.message}`);
        return;
      }

      console.log("Registration response:", data);

      // User successfully created
      if (data.user) {
        alert(
          "Registration successful! Please check your email for verification."
        );

        navigate("/login");
      }
    } catch (err) {
      console.error("Unexpected registration error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>Create Account</h2>
        <p>Join JobPortal</p>

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength={6}
          />

          {/* Register Button */}
          <button type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        <p>
          Already have an account?{" "}

          <span
            onClick={() => navigate("/login")}
            style={{
              cursor: "pointer",
              color: "#2563eb",
              fontWeight: "600",
            }}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;