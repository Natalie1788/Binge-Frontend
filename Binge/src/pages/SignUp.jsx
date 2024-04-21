
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";




const SignUpPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
        <section className="size-[40rem] border-solid border-black border-8 flex flex-col justify-center items-center bg-white p-8 rounded-lg">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-xl font-bold">Logga in</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 my-5"
              type="submit"
            >
              Logga In Med Google
            </button>
          </div>
          <SignUpForm />
        </section>
      </div>
    </>
  );
};

const SignUpForm = () => {
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
      className="max-w-md mx-auto grid grid-cols-1 gap-4"
    >
      <div className="mb-4">
        <label className="block mb-1" htmlFor="usernameOrEmail">
          Username or Email
        </label>
        <input
          className="border-solid border-black border-2 py-2 px-4 w-full"
          id="usernameOrEmail"
          {...register("usernameOrEmail", { required: true })}
        />
        {errors.usernameOrEmail && <span>This field is required</span>}
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

      <Link to="/signin"> Dont have an Account?</Link>
    </form>
  );
};

export default SignUpPage;
