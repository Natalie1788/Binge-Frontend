import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

     localStorage.setItem(
       data.email,
       JSON.stringify({
         firstName: data.firstName,
         lastName: data.lastName,
         email: data.email,
         password: data.password,
       })
     );
  
    // Navigate to the signin page
    navigate("/signin");
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto grid grid-cols-2 gap-4"
      >
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-1">
            First Name
          </label>
          <input
            className="border-solid border-black border-2 py-2 px-4 w-full"
            id="firstName"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-1">
            Last Name
          </label>
          <input
            className="border-solid border-black border-2 py-2 px-4 w-full"
            id="lastName"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
     
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            className="border-solid border-black border-2 py-2 px-4 w-full"
            id="email"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            className="border-solid border-black border-2 py-2 px-4 w-full"
            id="password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 col-span-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Sign Up
        </button>

        <Link to="/signin">Already got an account?</Link>
      </form>
    </>
  );
};

export default SignUpPage;
