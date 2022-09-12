import FormInput from "../../components/form-input/form-input.component";
import { SignUpContainer } from "./sign-up.styles.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button, {
  buttonVarietyClasses,
} from "../../components/button/button.component.jsx";
import { useDispatch } from "react-redux";
import { updateUserName,signUpStart } from "../../store/user/user.action";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToSignIn = () => {
    navigate("/sign-in");
  };
  const navigateToHomePage = () => {
    navigate("/", { replace: true });
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

    if (password !== confirmPassword) {
      alert("password and confirm password must match when signing up");
      return;
    }

    try {
      dispatch(signUpStart(email,password,displayName))
      resetFormFields();
      dispatch(updateUserName(displayName));
      navigateToHomePage();

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(
          "Cannot create account, email is already used for an existing account"
        );
      } else {
        alert(
          "account creation encountered an error: " +
            error.message.slice(10, 50)
        );
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />

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

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />

        <Button buttonVariety={buttonVarietyClasses.base} type="submit">
          Sign Up
        </Button>
      </form>
      <h3> If you want to be redirected to sign in page please click </h3>
      <Button
        buttonVariety={buttonVarietyClasses.inverted}
        onClick={navigateToSignIn}
      >
        Sign In
      </Button>
    </SignUpContainer>
  );
};
export default SignUp;
