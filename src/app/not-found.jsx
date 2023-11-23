import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className=" container text-center  text-success">
        <h3> Oooops...</h3>
        <hr  />
        <h4>The page you are looking for does not exist</h4>
        <h4>Or it might be still under development</h4>
        <p>will you like to go back to</p>
        <Link className="text-decoration-underline fw-bold  text-success " href="/">
          Home Page?
        </Link>
      </div>
    </section>
  );
}
