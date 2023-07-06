import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
const SignIn = () => {
  const navigate = useNavigate();
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/admin/add-product");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-[500px] mx-auto container bg-white shadow-lg rounded mt-20 p-10">
      <h1 className="text-3xl font-semibold text-center mb-5">Sign In</h1>
      <button
        onClick={handleSignInWithGoogle}
        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-green-500 rounded-lg w-full"
      >
        Google
      </button>
    </div>
  );
};

export default SignIn;
