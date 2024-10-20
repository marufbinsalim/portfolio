import Link from "next/link";
import React from "react";

function Button({
  text,
  link,
  blank,
}: {
  text: string;
  link: string;
  blank?: boolean;
}) {
  return (
    <Link className="btn" href={link} target={blank ? "_blank" : ""}>
      {text}
    </Link>
  );
}

export default Button;
