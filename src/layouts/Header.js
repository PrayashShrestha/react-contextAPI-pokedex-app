import React from "react";
import { Navbar, NavbarBrand, Form, Input, FormGroup } from "reactstrap";

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
        <Form className="mx-auto ">
          <Input
            className="border-dark"
            type="text"
            name="search"
            placeholder="Search..."
          />
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
