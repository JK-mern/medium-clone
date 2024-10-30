import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { HomeIcon, LogIn } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignInAlert() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleCancel = () => {
    setOpen(false);
    navigate("/");
  };

  const handleProceed = () => {
    navigate("/signin"); // Navigate to SignIn on "Proceed"
  };

  return (
    <div>
      <AlertDialog open={open}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign in required</AlertDialogTitle>
            <AlertDialogDescription>
              You need to sign in to access this content. Would you like to sign
              in now?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>
              <HomeIcon className="mr-2 h-4 w-4" />
              Go to Homepage
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleProceed}>
              <LogIn className="mr-2 h-4 w-4" />
              Go to sign in
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default SignInAlert;
