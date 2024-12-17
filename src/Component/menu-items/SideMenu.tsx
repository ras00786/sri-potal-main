import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

interface MenuItem {
  name: string;
  path: string;
  icon?: string | null; // or string | undefined
  children?: MenuItem[];
}

interface SideMenuProps {
  menuItems: MenuItem[];
}

const SideMenu: React.FC<SideMenuProps> = ({ menuItems }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column vh-100">
      <Navbar.Toggle aria-controls="side-menu" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="side-menu" in={expanded}>
        <Nav className="flex-column">
          {menuItems.map((item) => (
            item.children ? (
              <NavDropdown
                title={
                  <>
                    {item.icon && <i className={item.icon}></i>} {item.name}
                  </>
                }
                id={`nav-dropdown-${item.name}`}
                key={item.name}
              >
                {item.children.map((child) => (
                  <NavDropdown.Item as={NavLink} to={child.path} key={child.name}>
                    {child.icon && <i className={child.icon}></i>} {child.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ) : (
              <Nav.Link as={NavLink} to={item.path} key={item.name}>
                {item.icon && <i className={item.icon}></i>} {item.name}
              </Nav.Link>
            )
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SideMenu;
