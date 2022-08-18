import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "../sign-in/sign-in.styles.scss";
import Button from "../../components/button/button.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
const SignIn = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  //console.log(formFields);

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    console.log("You've successfully sign in with google popup");
    navigateToHomePage();
  };

  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  const navigateToHomePage = () => {
    navigate("/");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      //useState Hooks causes re-rendering
      resetFormFields();
      navigateToHomePage();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated exist with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonVariety="google"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
      <h3> If you want to be redirected to sign up page please click </h3>
      <Button buttonVariety="inverted" onClick={navigateToSignUp}>
        Sign Up
      </Button>
    </div>
  );
};
export default SignIn;
