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

  const onSubmit = async (data) => {
    console.log("Form data:", data);  // Debugging log

    try {
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

      console.log("Response status:", response.status);  // Debugging log
      console.log("Response headers:", response.headers);  // Debugging log

      if (response.ok) {
        // Registration was successful, navigate to the signin page
        console.log("Registration successful");  // Debugging log
        navigate("/signin");
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        // Handle error based on errorData
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto grid grid-cols-2 gap-4"
      >
        <div className="mb-4 col-span-2">
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
        <div className="mb-4 col-span-2">
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
        <Link className="col-span-2 text-center mt-4" to="/signin">Already have an account?</Link>
      </form>
    </>
  );
};

export default SignUpPage;
