import Quote from "@/components/Quote";
import SignInLeft from "@/components/SignInLeft";


function Signin() {
  return (
    <div>
      <main className="grid grid-cols-1 lg:grid-cols-2  min-h-screen">
        <div>
          <SignInLeft/>
        </div>
        <div>
          <Quote/>
        </div>
      </main>
    </div>
  );
}


export default Signin;
