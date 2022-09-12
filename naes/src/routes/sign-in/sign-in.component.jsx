
import { SignInContainer, ButtonsContainer } from "./sign-in.styles.jsx";
import Button, {
  buttonVarietyClasses,
} from "../../components/button/button.component.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import { useDispatch } from "react-redux";
import {googleSignInStart,emailSignInStart} from '../../store/user/user.action'

const SignIn = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
    console.log("You've successfully Google sign in");
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
      
      dispatch(emailSignInStart(email,password));
      //useState Hooks causes re-rendering
      console.log("You've successfully sign in");
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
    <SignInContainer>
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
        <ButtonsContainer>
          <Button buttonVariety={buttonVarietyClasses.base} type="submit">
            Sign In
          </Button>
          <Button
            type="button"
            buttonVariety={buttonVarietyClasses.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
      <h3> If you want to be redirected to sign up page please click </h3>
      <Button
        buttonVariety={buttonVarietyClasses.inverted}
        onClick={navigateToSignUp}
      >
        Sign Up
      </Button>
    </SignInContainer>
  );
};
export default SignIn;
