import React, { useState } from "react";
import logo1 from '../img/logo1.png';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loading,setLoading]=useState(false);
  const [errorMessage,setErrorMessage]=useState<string>('');
  const [successMessage,setSuccessMessage]=useState<string>('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const { setUser } = useContext(UserContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');
    try {
      // Points exactly to our new backend route
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }), 
      });
      const data=await response.json();

      if (response.ok) {
        alert('Login Successful');
        setFormData({ email: '', password: '', rememberMe: false }); 
        setSuccessMessage(data.message);
        setUser(data.user);
        localStorage.setItem("user",JSON.stringify(data.user));
        navigate('/profile');
      } else {
        alert('Invalid email or password.');
      }
    } catch (error:any) {
      setErrorMessage(error.message);
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-3">
      <div className="card shadow-lg p-4 bg-white rounded w-100 mx-auto" style={{ maxWidth: "500px" }}>
        
        <div className="text-center mb-4">
          <img 
            src={logo1} 
            className="img-fluid" 
            alt="Logo" 
            style={{ maxHeight: "150px", objectFit: "cover" }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* Email Field */}
          <div className="row g-3 align-items-center mb-3">
            <div className="col-md-3">
              <label htmlFor="inputEmail3" className="col-form-label">Email</label>
            </div>
            <div className="col-md-9">
              <input 
                type="email" 
                className="form-control" 
                id="inputEmail3" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="row g-3 align-items-center mb-4">
            <div className="col-md-3">
              <label htmlFor="inputPassword3" className="col-form-label">Password</label>
            </div>
            <div className="col-md-9">
              <input 
                type="password" 
                className="form-control" 
                id="inputPassword3" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Sign in
              <Link to='/profile'></Link>
            </button>
          </div>

          <div className="row text-center mt-4 pt-2 border-top">
            <div className="col-sm-50 mb-2 mb-sm-0 d-flex justify-content-center align-content-center">
              <Link to="/newuser" className="text-decoration-none small">Don't have an account?</Link>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
