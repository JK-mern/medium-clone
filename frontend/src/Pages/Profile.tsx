import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import UserBlogs from "@/components/UserBlogs";
import { fetchUserDetails } from "@/hooks/fetchUserDetails";

function Profile() {
  const userData = fetchUserDetails();
  console.log(userData);

  return (
    <div>
      <Navbar />
      {userData ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
          <div className="w-full max-w-screen-lg">
            <ProfileCard name={userData?.name} email={userData?.email} />
            <UserBlogs blogs={userData.posts} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Profile;
