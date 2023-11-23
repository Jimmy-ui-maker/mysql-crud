import Link from "next/link";

export default async function WelcomePage() {
  return (
    <section className=" shadow-sm w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className=" container">
        <div className="row g-2 text-center justify-content-center  ">
          <div className="col-lg-6 col-12 ">
            <h1 className=" text-success fw-bolder  ">
              This page is all about CRUD With Next.js and MySql
            </h1>
            <p className="text-success fw-bold ">
              Click on the buttons below to cary out some operations
            </p>
            <div className=" d-flex justify-content-around align-items-center">
              <Link
                className=" fw-bold  btn btn-outline-success"
                href={"/add-users"}
              >
                Add Products
              </Link>
              <Link
                className=" fw-bold  btn btn-outline-success"
                href={"/products"}
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
