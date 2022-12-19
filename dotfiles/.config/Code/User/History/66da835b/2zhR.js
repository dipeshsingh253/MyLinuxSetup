import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationFrom";
import LoginFrom from "./components/LoginFrom";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/login",
    element: <LoginFrom />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
