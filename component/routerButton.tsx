import React from "react";
import Link from "next/link";

function Button({ ...props }) {
  return (
    <button>
      {props.url ? <Link href={props.url}>{props.title}</Link> : props.title}
    </button>
  );
}

export default Button;
