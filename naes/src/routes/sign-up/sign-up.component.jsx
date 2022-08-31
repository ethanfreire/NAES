import FormInput from "../../components/form-input/form-input.component";
import "../sign-up/sign-up.styles.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button, {buttonVarietyClasses} from "../../components/button/button.component.jsx";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password, confirmPassword } = formFields;

  //console.log(formFields);
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/sign-in");
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

    if (password !== confirmPassword) {
      alert("password and confirm password must match when signing up");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { username });

      resetFormFields();
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
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "username",
            value: username,
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

        <Button buttonVariety={buttonVarietyClasses.base}  className="button-container" type="submit">
          Sign Up
        </Button>
      </form>
      <h3> If you want to be redirected to sign in page please click </h3>
      <Button buttonVariety={buttonVarietyClasses.inverted} onClick={navigateToSignIn}>
        Sign In
      </Button>
    </div>
  );
};
export default SignUp;
