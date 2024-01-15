import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";

const useLogOut = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();
  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      console.log("user loggerd out");
    } catch (error) {
      showToast(
        "Error",
        "LogOut attempt failed due to some reason please try again",
        "error"
      );
    }
  };
  return { handleLogout, isLoggingOut, error };
};

export default useLogOut;
