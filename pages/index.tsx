import Link from "next/link";
import { Fragment } from "react";
import RouterBtn from "../component/RouterBtn";

export default function Home() {
  return (
    <Fragment>
      <section>
        <RouterBtn title="SIGNUP" url="/sign/up" />
        <RouterBtn title="SIGNIN" url="/sign/in" />
      </section>
      <section>
        <RouterBtn title="BOARD" url="/board" />
      </section>
    </Fragment>
  );
}
