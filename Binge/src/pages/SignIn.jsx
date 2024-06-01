import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/style.css'; // Import the CSS file

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      console.log('Sending data:', data); // Log the data being sent

      const response = await fetch('https://azurefoodapi.azurewebsites.net/login2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();
      if (!text) {
        throw new Error('Received empty response from the server');
      }

      const responseData = await response.json();

      // Log the entire response to see its structure
      console.log('Full API response:', responseData);

      // Assuming userId is directly in responseData or nested within a user object
      const userId = responseData.userId || responseData.user?.userId;

      if (userId) {
        localStorage.setItem('userId', userId);
        console.log(userId + " You Are Successfully Logged In");
        navigate("/cookbook"); // Navigate to the correct path
      } else {
        console.error("userId is undefined in the response data");
        alert("Login successful, but no userId returned");
      }
    } catch (error) {
      console.error("Error: ", error);
      alert(`Error: ${error.message}`); // Display a generic error message
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="registration-form-container">
          <h2 className="text-xl">Logga In</h2>
          <SignInForm onSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
};

const SignInForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label className="block mb-1" htmlFor="email">Email</label>
        <input
          className="border-solid border-black border-2 py-2 px-4 w-full"
          id="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div className="input-group">
        <label className="block mb-1" htmlFor="password">Password</label>
        <input
          className="border-solid border-black border-2 py-2 px-4 w-full"
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <span className="error">{errors.password.message}</span>}
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 my-5"
        type="submit"
      >
        Log In
      </button>
      <Link className="login-link" to="/signup">Do not have an Account?</Link>
    </form>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInPage;
