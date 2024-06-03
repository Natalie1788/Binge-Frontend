import { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import '../styles/style.css'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import Footer from "../components/Footer"


const SignUpPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const onSubmit = async (data) => {
    try {
      console.log('Data to be sent:', data); // Debugging log
      const response = await fetch('https://azurefoodapi.azurewebsites.net/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (response.ok) {
        console.log('Registration successful');
        setSuccessMessage('Registration successful');
        setErrorMessage('');
        navigate("/signin");
      } else {
        const errorData = await response.json();
        console.error('Error response from server:', errorData); // Debugging log
        setErrorMessage(errorData.title || 'Registration failed');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error during fetch:', error); // Debugging log
      setErrorMessage('An error occurred. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="registration-form-container">
          <h2 className='text-xl'>Create an account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                />
                <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && <span>This field is required</span>}
            </div>
            <button type="submit" className='my-5'>Create an account</button>
            <Link to="/signin">Already have an account? Login</Link>
          </form>
          {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SignUpPage;
