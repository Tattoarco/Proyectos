import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input } from "@nextui-org/react";

export const Nav = () => {
  return (
    <main>
      <Navbar shouldHideOnScroll className="shadow-md">
        <NavbarBrand>
          <img src="./logo.png" alt="Logo" className="w-[5rem] pt-5 rounded-full" />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="hover:border-b-medium hover:border-[#9E6200]">
            <Link color="foreground" to="/">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem className="hover:border-b-medium hover:border-[#9E6200]">
            <Link color="foreground" href="#">
              Mujer
            </Link>
          </NavbarItem>
          <NavbarItem className="hover:border-b-medium hover:border-[#9E6200]">
            <Link color="foreground" href="#">
              Hombre
            </Link>
          </NavbarItem>
          <NavbarItem className="hover:border-b-medium hover:border-[#9E6200]">
            <Link color="foreground" href="#">
              Accsesorios
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="gap-2 text-[#9E6200] cursor-pointer flex hover:border-b-2 hover:border-[#9E6200] hover:scale-110">
            <i className="fi fi-br-search"/>
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
