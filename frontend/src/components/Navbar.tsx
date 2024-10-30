import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { UserRound } from "lucide-react";
import { LogOut } from "lucide-react";
import { UserPen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "@/state/store";
function Navbar() {
  const deleteUser = useUserStore ((state) => state.deleteUser)
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    deleteUser()
    navigate("/signin");
  };
  return (
    <div className=" border-b border-gray-200  py-5   overscroll-auto   ">
      <div className="max-w-screen-2xl mx-auto  flex items-center justify-between px-30">
        <div>
          <Link to={"/"}>
            <h2 className="font-extrabold font-inter text-2xl cursor-pointer">
              Medium
            </h2>
          </Link>
        </div>
        <div className="flex justify-center  items-center gap-5">
          {" "}
          <Link to={"/publish"}>
            <Button className="bg-green-600">New Blog </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              {" "}
              <Avatar className="relative flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md cursor-pointer">
                <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 rounded-full">
                  <UserRound className="h-7 w-7 text-black  p-1 rounded-full shadow-sm" />
                </AvatarFallback>
              </Avatar>{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="justify-between ">
                <Link to={'/profile'} className="flex  flex-row gap-10 ">
                  Profile <UserPen className="text-blue-600" />{" "}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="justify-between"
                onClick={handleLogout}
              >
                Logout
                <LogOut className="text-red-600" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
