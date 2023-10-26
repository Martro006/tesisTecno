import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

import { ReactSession } from 'react-client-session';
const usuario = JSON.parse(ReactSession.get("user"));

const navigation = [

  {
    title: "Laboratorios Disponibles",
    href: "/laboratoriosdisp",
  },
  {
    title: "Mis Reservas",
    href: "/misReservas",
  },
];
const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={
          { background: `url(https://ipl.edu.do/images/123766700_3596261447063489_6335541981401783949_o.jpg) no-repeat ` }}
      >
        <div className="p-3 d-flex">
          <img src={"https://superior.ipl.edu.do/images/WhatsApp_Image_2021-09-03_at_2.08.24_PM.jpeg"} alt="user" width="50" />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">{usuario[0].us_nombre1}</div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}

          {usuario[0].us_rango === 1 &&

            <NavItem className="sidenav-bg" >
              <Link
                to={"/Laboratorios"}
                className={
                  location.pathname === "/Laboratorios"
                    ? "active nav-link py-3"
                    : "nav-link text-dark py-3"
                }
              >
                <span className="ms-3 d-inline-block">{"Laboratorios"}</span>
              </Link>
            </NavItem>
          }
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
