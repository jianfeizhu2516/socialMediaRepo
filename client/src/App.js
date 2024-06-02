import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Navbar from "./components/navBar/Navbar"
import RightBar from "./components/rightBar/RightBar"
import LeftBar from "./components/leftBar/LeftBar"
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
function App() {
  const {currentUser} = useContext(AuthContext);
  const Layout = () => {
    return (
      <div >
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />

        </div>
      </div>
    )
  }
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }
  //when user not logged in , redirect them to login page
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>),
      children: [
        {
          path: "/profile/:id",
          element: <Profile />
        },

        {
          path: "/",
          element: <Home />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }

  ])

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
