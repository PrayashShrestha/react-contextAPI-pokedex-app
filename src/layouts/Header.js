import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="primary" dark className="fixed">
        <NavbarBrand
          className="mx-auto font-weight-bold font-italic "
          style={{ fontSize: 33 }}
        >
          PokeDex
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
