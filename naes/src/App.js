import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return(
    <div>
      <div>
        <h1> I'm the shop page</h1>
      </div>
    </div>
  )
}

const App = () => {
  return ( 
    <Routes>
      <Route path='/' element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
      </Route>
    </Routes>
  );
};
export default App;
