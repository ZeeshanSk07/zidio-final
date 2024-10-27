"use client"
import React, { useState ,useEffect} from "react";
import "./AdminLogin.css";
import { AdminLog } from "../../api/user";
import toast, {Toaster} from "react-hot-toast";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const login = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);
        const response = await AdminLog(email, password);
        console.log(response);
        if (response.status === 200) {
          router.push("/career/admin");
          toast.success("Admin login successful");
          localStorage.setItem("userid", response.data.id);
          setLoading(false);
        } else {
          setErrors({ ...errors, message: "Invalid credentials" });
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setErrors({
          ...errors,
          message: "An error occurred while logging in.",
        });
        setLoading(false);
      }
    }
  };

  return (
    <div className="admin-login-container">
      <Toaster position="top-center" reverseOrder={false}/>
      <form
        onSubmit={(e) => {
          login(e);
        }}
        className="admin-login-form"
      >
        <h2 className="form-title">Login</h2>

        <label className="form-label">
          Email:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="name"
            className="form-input"
            placeholder="Email address"
          />
          <span className="error">{errors.email}</span>
        </label>

        <label className="form-label">
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="form-input"
            placeholder="Password"
          />
          <span className="error">{errors.password}</span>
        </label>

        <button type="submit" className="form-button">
          {loading ? (
            <TailSpin
              visible={true}
              height="18"
              width="18"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            <>Login</>
          )}
        </button>
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      </form>
    </div>
  );
}

export default AdminLogin;
