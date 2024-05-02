import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

 const handleSubmit = (data) => {
   const userData = JSON.parse(localStorage.getItem(data.email));
   console.log(data.email)
   console.log(userData)
   if (userData) {
     if (userData.password === data.password) {
       console.log(userData.firstName + " You Are Successfully Logged In");
       navigate("/profile");
     } else {
       console.log("Password is incorrect");
     }
   } else {
     console.log("User with provided email does not exist");
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
    <>
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto grid grid-cols-1 gap-4"
          >
            <div className="mb-4">
              <label className="block mb-1" htmlFor="usernameOrEmail">
                Email
              </label>
              <input
                className="border-solid border-black border-2 py-2 px-4 w-full"
                id="Email"
                {...register("email", { required: true })}
              />
              {errors.Email && <span>This field is required</span>}
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

            <Link to="/signup"> Dont have an Account?</Link>
          </form>
        </section>
      </div>
    </>
  );
};

export default SignInPage;
