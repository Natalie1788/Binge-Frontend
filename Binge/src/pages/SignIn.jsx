
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


















const signInPage= () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
        <section className="size-[40rem] border-solid border-black border-8 flex flex-col justify-center items-center bg-white p-8 rounded-lg">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-xl font-bold">Registrera Dig</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 my-5"
              type="submit"
            >
              Sign In With Google
            </button>
          </div>
          <SignInForm />
        </section>
      </div>
    </>
  );
}

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
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
        <label htmlFor="username" className="block mb-1">
          Username
        </label>
        <input
          className="border-solid border-black border-2 py-2 px-4 w-full"
          id="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
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
        Sign In
      </button>

      <Link to="/signup">Already got an account?</Link>
    </form>
  );
};


export default signInPage;
