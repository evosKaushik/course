import "./App.css";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";

function App() {
  useGoogleOneTapLogin({
  onSuccess: credentialResponse => {
    console.log(credentialResponse);
  },
  onError: () => {
    console.log('Login Failed');
  },
});
  return (
    <>
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      /> */}
    </>
  );
}

export default App;
