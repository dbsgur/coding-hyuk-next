import React from "react";
import Link from "next/link";
import { NavStruct } from "data/navData";

function RouterBtn({ url, title }: NavStruct) {
  return <button>{url ? <Link href={url}>{title}</Link> : title}</button>;
}

export default RouterBtn;
