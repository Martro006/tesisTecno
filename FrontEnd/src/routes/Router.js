import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const Clientes = lazy(() => import("../views/Clientes.js"));

const Login = lazy(() => import("../views/Login.js"));
const Home = lazy(() => import("../views/Home.js"));
const Laboratorios = lazy(() => import("../views/Laboratorios.js"));
const LaboratoriosDisp = lazy(() => import("../views/LaboratoriosDisp.js"));
const MisReservas = lazy(() => import("../views/MiReservas.js"));



/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/home", exact: true, element: <Home /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },      
      { path: "/clientes", exact: true, element: <Clientes /> },
      { path: "/laboratorios", exact: true, element: <Laboratorios /> },
      { path: "/laboratoriosdisp", exact: true, element: <LaboratoriosDisp /> },
      { path: "/misReservas", exact: true, element: <MisReservas /> },


    ],
  },
  {
    path: "login",
    element: <Login />
  },
];

export default ThemeRoutes;
