
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import logo from 'assets/image/logo1.png'
import 'styles/navbar.css'

const NavbarNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);
  const { logout } = useAuth0();


  return (
    isAuthenticated && (
      <div>
        <Navbar color="light" light expand="md" className="px-4">
          <NavbarBrand className="navbarBrand" href="/admin/perfil">
            <img width="80" className="px-1" src={logo} alt="" />{user.name.toUpperCase()}
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <img className="rounded-circle" width="55" src={user.picture} alt={user.name} />
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {user.nickname}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link className="text-decoration-none" to="/admin/perfil">Mi Perfil</Link>
                  </DropdownItem>
                  <DropdownItem>
                    Configuraciones
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => logout({ returnTo: window.location.origin })}>
                    Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  );
}

export default NavbarNav;