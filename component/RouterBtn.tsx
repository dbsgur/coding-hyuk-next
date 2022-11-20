import React from "react";
import Link from "next/link";

interface buttonInfo {
  url: string;
  title: string;
}

function RouterBtn({ url, title }: buttonInfo) {
  return <button>{url ? <Link href={url}>{title}</Link> : title}</button>;
}

export default RouterBtn;
