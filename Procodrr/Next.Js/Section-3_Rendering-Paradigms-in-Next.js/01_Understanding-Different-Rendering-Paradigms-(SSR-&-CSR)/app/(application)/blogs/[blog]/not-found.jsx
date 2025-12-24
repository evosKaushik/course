"use client";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathUrl = usePathname();
  return (
    <>
      <h1>Blog /{pathUrl.split("/")[2]} Page not found!</h1>
      <p>Could not found page you are locking for.</p>
    </>
  );
};

export default NotFound;
