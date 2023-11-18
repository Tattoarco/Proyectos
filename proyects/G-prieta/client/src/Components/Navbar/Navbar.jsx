import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input } from "@nextui-org/react";

export const Nav = () => {
  return (
    <main>
      <Navbar className="bg-transparent fixed">
        <NavbarBrand>
          <img src="./logo.png" alt="Logo" className="w-[5rem]" />
          <p>G.PRIETA</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" to="/">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Mujer
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Hombre
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Accsesorios
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="gap-2 text-[#9E6200] cursor-pointer">
            <i className="fi fi-br-search" />
            Buscar
          </NavbarItem>
          <NavbarItem>
            <Link to="/login" >
              <Button className="text-[#9E6200] hover:bg-[#ECDCAB]" href="#" variant="light">
                <i className="fi fi-br-user text-lg" />
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <i className="fi fi-br-shopping-cart-add text-lg"></i>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </main>
  );
};
