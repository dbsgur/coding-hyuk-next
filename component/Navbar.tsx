import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import RouterBtn from "./RouterBtn";
import { navs } from "data/navData";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Breadcrumbs maxItems={5} aria-label="breadcrumb">
          {navs.map((nav) => (
            <RouterBtn title={nav.title} url={nav.url} key={nav.url} />
          ))}
        </Breadcrumbs>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default Navbar;
