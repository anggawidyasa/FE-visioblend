import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Services2 from "../pages/Services2.jsx";
import Portfolio from "../pages/portfolio.jsx";
import Portfolio2 from "../pages/Portfolio2.jsx";
import Portfolio3 from "../pages/Portfolio3.jsx";
import Portfolio4 from "../pages/Portfolio4.jsx";
import LoginForm from "../pages/login.jsx";
import SignupForm from "../pages/signup.jsx";
import Services3 from "../pages/Services3.jsx";
import Services4 from "../pages/Services4.jsx";
import Services5 from "../pages/Services5.jsx";
import Loyaltyreward from "../pages/LoyaltyReward.jsx";
import Ordering1 from "../pages/ordering1.jsx";
import Ordering2 from "../pages/ordering2.jsx";
import Ordering3 from "../pages/ordering3.jsx";
import Ordering4 from "../pages/ordering4.jsx";
import Article from "../pages/Article.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Services2",
        element: <Services2 />,
      },
      {
        path: "/Services3",
        element: <Services3 />,
      },
      {
        path: "/Services4",
        element: <Services4 />,
      },
      {
        path: "/Services5",
        element: <Services5 />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Portfolio2",
        element: <Portfolio2 />,
      },
      {
        path: "/Portfolio3",
        element: <Portfolio3 />,
      },
      {
        path: "/Portfolio4",
        element: <Portfolio4 />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        path: "/Loyaltyreward",
        element: <Loyaltyreward />,
      },
      {
        path: "/ordering1",
        element: <Ordering1 />,
      },
      {
        path: "/ordering2",
        element: <Ordering2 />,
      },
      {
        path: "/ordering3",
        element: <Ordering3 />,
      },
      {
        path: "/ordering4",
        element: <Ordering4 />,
      },
      {
        path: "/Article",
        element: <Article />,
      },
    ],
  },
]);

export default router;
