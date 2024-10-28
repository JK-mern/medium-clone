import React from "react";
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
function Navbar() {
  return (
    <div className=" border-b border-gray-200  py-5   overscroll-auto   ">
      <div className="max-w-screen-2xl mx-auto  flex items-center justify-between px-30">
        <div>
          <h2 className="font-extrabold font-inter text-2xl">Medium</h2>
        </div>
        <div className="flex justify-center  items-center gap-5">
          {" "}
          <Button className="bg-green-600">Publish </Button>
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
                Profile <UserPen className="text-blue-600" />{" "}
              </DropdownMenuItem>
              <DropdownMenuItem className="justify-between">
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
