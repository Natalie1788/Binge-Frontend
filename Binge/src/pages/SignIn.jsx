import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import axios from 'axios';
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post('https://azurefoodapi.azurewebsites.net/register', {
        email: data.email,
        password: data.password,
        twoFactorCode: data.twoFactorCode || '',
        twoFactorRecoveryCode: data.twoFactorRecoveryCode || '',
      });

      if (response.status === 200) {
        // Assuming the response contains user data
        console.log(response.data.firstName + " You Are Successfully Logged In");
        // Navigate to profile or any other page
        navigate("/profile");
      }
    } catch (error) {
      if (error.response) {
        console.log("Error: ", error.response.data.message);
      } else {
        console.log("Error: ", error.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
        <section className="size-[40rem] border-solid border-black border-8 flex flex-col justify-center items-center bg-white p-8 rounded-lg">
          <SignInForm onSubmit={handleSubmit} />
        </section>
      </div>
    </>
  );
};

const SignInForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto grid grid-cols-1 gap-4"
    >
      <div className="mb-4">
        <label className="block mb-1" htmlFor="Email">
          Email
        </label>
        <input
          className="border-solid border-black border-2 py-2 px-4 w-full"
          id="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">
          Password
        </label>
        <input
          className="border-solid border-black border-2 py-2 px-4 w-full"
          id="password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 my-5"
        type="submit"
      >
        Log In
      </button>
      <Link to="/signup">Do not have an Account?</Link>
    </form>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInPage;
