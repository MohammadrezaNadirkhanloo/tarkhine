import Link from "next/link";

function LinkCustom({ href, children, ...prop }) {
  return (
    <Link href={href} style={{ textDecoration: "none", ...prop }}>
      {children}
    </Link>
  );
}

export default LinkCustom;
