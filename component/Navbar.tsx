import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import RouterBtn from "./RouterBtn";
import { navs } from "../data/navData";

function Navbar() {
  return (
    <Breadcrumbs maxItems={5} aria-label="breadcrumb">
      {navs.map((nav) => (
        <RouterBtn title={nav.title} url={nav.url} />
      ))}
    </Breadcrumbs>
  );
}

export default Navbar;
