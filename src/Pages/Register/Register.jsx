import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateRegisterProfile } = useContext(AuthContext);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const handleRegister = (formData) => {
    const { email, fullName, password, photoUrl } = formData;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateRegisterProfile(fullName, photoUrl);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mb-5 lg:mb-10 lg:bg-base-200 rounded-xl">
      <Helmet>
        <title>Sign Up | Green Valley</title>
      </Helmet>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-jost font-bold text-center pt-5 lg:pt-10 text-btn-1 ">
        Register Now !
      </h1>
      <div className="hero px-2 py-5 lg:py-10 ">
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 border">
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input
                {...register("fullName", {
                  required: {
                    value: true,
                    message: "Name is a Required Field!",
                  },
                })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.fullName && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is a required Field!",
                  },
                })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.email && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Photo URL</span>
              </label>
              <input
                {...register("photoUrl", {
                  required: {
                    value: true,
                    message: "PhotoURL is a required Field",
                  },
                })}
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.photoUrl && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.photoUrl.message}
                </p>
              )}
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Enter password to proceed!",
                  },
                  minLength: {
                    value: 6,
                    message: "Password Must be equal 6 Character or longer",
                  },
                  maxLength: {
                    value: 32,
                    message: "Password Cannot be longer than 32 characters",
                  },
                  validate: {
                    isLower: (value) => {
                      if (/[a-z]/.test(value)) {
                        return true;
                      }
                      return "Password Must Contain At Least One Lowercase Character";
                    },
                    isUpper: (value) => {
                      if (/[A-Z]/.test(value)) {
                        return true;
                      }
                      return "Password Must Contain At Least One UpperCase Character";
                    },
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered"
              />
              <span
                onClick={handleShowPassword}
                className="text-2xl absolute right-4 top-[61%]"
              >
                {showPassword ? (
                  <IoIosEye></IoIosEye>
                ) : (
                  <IoIosEyeOff></IoIosEyeOff>
                )}
              </span>
            </div>
            <div>
              {errors.password && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn  bg-primary-1 hover:bg-primary-1  text-lg text-white ">
                Register
              </button>
            </div>
          </form>
          <p className="text-center pb-5 text-lg">
            Already have an account? Please{" "}
            <Link to="/login" className="link text-primary-1">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
