import React, { Component, useState } from "react";
import 'styles/header.css'
import logo from '../assets/image/logo.png'
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logout } from './Logout'
import { useAuth0 } from "@auth0/auth0-react";
import {
      Collapse,
      Container,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      Button,
      UncontrolledDropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
    } from "reactstrap";
    

//export class Header extends Component {

        // handleLogout = () => {
    //     window.location.href= "./"
    // }
    //render() {

const Header = () => {
        const [isOpen, setIsOpen] = useState(false);
        const {
            user,
            isAuthenticated,
            loginWithRedirect,
            logout,
        } = useAuth0();

    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin,
        });

          
        return (
            <nav className="navbar navbar-expand-md flex-row flex-wrap navStyle">
                <div className="container">
                    <Link to="/home" className="navbar-brand navLink">
                        <img width="80" src={logo} alt=""></img>
                    </Link>
                    <button className="navbar-toggler buttonCollapse" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                        <i className="fas fa-bars iconCollapse"></i>
                    </button>
                    <div className="navbar-collapse collapse" id="collapseExample">
                        {!isAuthenticated && (
                            <ul className="navbar-nav ms-md-auto">
                                <li className="nav-item"><Link to="/login" className="select">Iniciar sesión</Link></li>
                            </ul>
                        )}

                        {isAuthenticated && (
                            <ul className="navbar-nav ms-md-auto">
                                <li className="nav-item"> <Link className="select" to="/admin/ventas" >Tienda</Link></li>
                                <Logout  />
                            </ul>

                        )
                        }
                        {isAuthenticated && (

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret id="profileDropDown">
                                    <img
                                        src={user.picture}
                                        alt="Profile"
                                        className="nav-user-profile rounded-circle"
                                        width="50"
                                    />
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>{user.name}</DropdownItem>
                                    <DropdownItem
                                        tag={RouterNavLink}
                                        to="/admin/perfil"
                                        className="dropdown-profile"
                                        activeClassName="router-link-exact-active"
                                    >
                                        <FontAwesomeIcon icon="user" className="mr-3" /> Mis datos
                                    </DropdownItem>
                                    <DropdownItem
                                        id="qsLogoutBtn"
                                        onClick={() => logoutWithRedirect()}
                                    >
                                        <FontAwesomeIcon icon="power-off" className="mr-3" /> Cerrar sesión
                                    </DropdownItem>
                                    {/* <DropdownItem>
                                        <Logout />
                                    </DropdownItem> */}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        )}
                    </div>
                </div>
            </nav>
        )
    //}
}
export default Header;

// import React, { Component, useState } from "react";
// import { NavLink as RouterNavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import 'styles/header.css'
// import logo from '../assets/image/logo.png'
// import { Logout } from '../components/Logout'

// import {
//   Collapse,
//   Container,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Button,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";

// import { useAuth0 } from "@auth0/auth0-react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const {
//     user,
//     isAuthenticated,
//     loginWithRedirect,
//     logout,
//   } = useAuth0();
//   const toggle = () => setIsOpen(!isOpen);

//   const logoutWithRedirect = () =>
//     logout({
//       returnTo: window.location.origin,
//     });

//   return (
//       <div className="navbar navbar-expand-md navStyle">
//           <Navbar text="white" color="light" light expand="md">
//               <Container>
//                   <NavbarBrand className="logo" />
//                   <NavLink to="/home" className="navbar-brand navLink">
//                         <img width="80" src={logo} alt=""></img>
//                      </NavLink>
//                   <NavbarToggler onClick={toggle} />
//                   <Collapse isOpen={isOpen} navbar>
//                       <Nav className="mr-auto" navbar>
//                           <NavItem>
//                               <NavLink
//                                   tag={RouterNavLink}
//                                   to="/"
//                                   exact
//                                   activeClassName="router-link-exact-active"
//                               >
//                                   Home
//                               </NavLink>
//                           </NavItem>
//                           {isAuthenticated && (
//                               <NavItem>
//                                   <NavLink
//                                       tag={RouterNavLink}
//                                       to="/admin/ventas"
//                                       exact
//                                       activeClassName="router-link-exact-active"
//                                   >
//                                       Tienda
//                                   </NavLink>
//                               </NavItem>
//                           )}
//                       </Nav>
//                       <Nav className="d-none d-md-block" navbar>
//                           {!isAuthenticated && (
//                               <NavItem>
//                                   <Button
//                                       id="qsLoginBtn"
//                                       color="primary"
//                                       className="btn-margin"
//                                       onClick={() => loginWithRedirect()}
//                                   >
//                                       Iniciar sesión
//                                   </Button>
//                               </NavItem>
//                           )}
//                           {isAuthenticated && (
//                               <UncontrolledDropdown nav inNavbar>
//                                   <DropdownToggle nav caret id="profileDropDown">
//                                       <img
//                                           src={user.picture}
//                                           alt="Profile"
//                                           className="nav-user-profile rounded-circle"
//                                           width="50"
//                                       />
//                                   </DropdownToggle>
//                                   <DropdownMenu>
//                                       <DropdownItem header>{user.name}</DropdownItem>
//                                       <DropdownItem
//                                           tag={RouterNavLink}
//                                           to="/admin/perfil"
//                                           className="dropdown-profile"
//                                           activeClassName="router-link-exact-active"
//                                       >
//                                           <FontAwesomeIcon icon="user" className="mr-3" /> Mis datos
//                                       </DropdownItem>
//                                       <DropdownItem
//                                           id="qsLogoutBtn"
//                                           onClick={() => logoutWithRedirect()}
//                                       >
//                                           <FontAwesomeIcon icon="power-off" className="mr-3" /> Cerrar sesión
//                                       </DropdownItem>
//                                   </DropdownMenu>
//                               </UncontrolledDropdown>
//                           )}
//                       </Nav>
//                       {/* pantallas pequeñas */}
//                       {!isAuthenticated && (
//                           <Nav className="d-md-none" navbar>
//                               <NavItem>
//                                   <Button
//                                       id="qsLoginBtn"
//                                       color="primary"
//                                       block
//                                       onClick={() => loginWithRedirect({})}
//                                   >
//                                       Iniciar sesión
//                                   </Button>
//                               </NavItem>
//                           </Nav>
//                       )}
//                       {isAuthenticated && (
//                           <Nav
//                               className="d-md-none justify-content-between"
//                               navbar
//                               style={{ minHeight: 170 }}
//                           >
//                               <NavItem>
//                                   <span className="user-info">
//                                       <img
//                                           src={user.picture}
//                                           alt="Profile"
//                                           className="nav-user-profile d-inline-block rounded-circle mr-3"
//                                           width="50"
//                                       />
//                                       <h6 className="d-inline-block">{user.name}</h6>
//                                   </span>
//                               </NavItem>
//                               <NavItem>
//                                   <FontAwesomeIcon icon="user" className="mr-3" />
//                                   <RouterNavLink
//                                       to="/profile"
//                                       activeClassName="router-link-exact-active"
//                                   >
//                                       Perfil
//                                   </RouterNavLink>
//                               </NavItem>
//                               <NavItem>
//                                   <FontAwesomeIcon icon="power-off" className="mr-3" />
//                                   <RouterNavLink
//                                       to="#"
//                                       id="qsLogoutBtn"
//                                       onClick={() => logoutWithRedirect()}
//                                   >
//                                      Cerrar sesión m
//                                   </RouterNavLink>
//                               </NavItem>
//                           </Nav>
//                       )}
//                   </Collapse>
//               </Container>
//           </Navbar>
//       </div>
//   );
// };

// export default Header;