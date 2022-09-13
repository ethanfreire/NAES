import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./routes/navigation-bar/navigation-bar.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar></NavigationBar>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="shop/*" element={<Shop></Shop>}></Route>
        <Route path="sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
      </Route>
    </Routes>
  );
};
export default App;
