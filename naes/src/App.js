import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/spinner/spinner.component";

const Home = lazy(() => import("./routes/home/home.component"));
const NavigationBar = lazy(() =>import("./routes/navigation-bar/navigation-bar.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner></Spinner>}>
      <Routes>
        <Route path="/" element={<NavigationBar></NavigationBar>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="shop/*" element={<Shop></Shop>}></Route>
          <Route path="sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="checkout" element={<Checkout></Checkout>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
