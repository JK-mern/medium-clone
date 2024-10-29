import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import UserBlogs from "@/components/UserBlogs";
import { fetchUserDetails } from "@/hooks/fetchUserDetails";
// import { Profile } from '@/types/types'
import React from "react";

function Profile() {
  const userData = fetchUserDetails();
  console.log(userData);

  return (
    <div>
      <Navbar />
      {userData && (
        <div className="flex flex-col justify-center items-center h-screen ">
          <div className="max-w-screen-md w-full ">
            <ProfileCard name={userData?.name} email={userData?.email} />
            <UserBlogs blogs={userData.posts} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
