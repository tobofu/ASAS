"use client"
import React from "react";
import {Navbar, NavbarContent, NavbarItem, Link} from "@nextui-org/react";


export default function Header() {
    return (
      <Navbar>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
              <Link color="foreground" href="#">
                ASAS
              </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link href="#">
              Add a Review
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">
              My Reviews
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">
              Campus Map
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }