import { SignInContainer, ButtonsContainer } from "./sign-in.styles";
import Button, {
  buttonVarietyChoices,
} from "../../components/button/button.component";
import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

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

  };

  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  const navigateToHomePage = () => {
    navigate("/");
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(emailSignInStart(email, password));
    resetFormFields();
    navigateToHomePage();
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button buttonVariety={buttonVarietyChoices.base} type="submit">
            Sign In
          </Button>
          <Button
            type="button"
            buttonVariety={buttonVarietyChoices.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
      <h3> If you want to be redirected to sign up page please click </h3>
      <Button
        buttonVariety={buttonVarietyChoices.inverted}
        onClick={navigateToSignUp}
      >
        Sign Up
      </Button>
    </SignInContainer>
  );
};
export default SignIn;
