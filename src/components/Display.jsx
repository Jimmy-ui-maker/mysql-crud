import { conn } from "@/libs/mysql";
import axios from "axios";
import Link from "next/link";
import React from "react";

async function loadProducts() {
  const products = await conn.query("SELECT * FROM product");
  return products;
}

export default async function Display() {
  const product = await loadProducts();

  return (
    <section
      id="product-card"
      className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className=" container">
        <div className="row  text-center ">
          <h1 className=" text-success">Product Page</h1>

          <div className="container d-flex justify-content-center my-2">
            <div className="col-lg-6 col-8   p-1 rounded-3">
              <Link className=" text-decoration-none" href={"/search"}>
                <div class="input-group ">
                  <input
                    type="search"
                    className="form-control shadow-none text-center text-success border-success"
                    placeholder="Type here to search..."
                    readOnly
                  />
                </div>
              </Link>
            </div>
          </div>
          <a className="btn text-decoration-none text-success mt-2 " href="/">
            <i className="bi bi-chevron-left "></i>
          </a>

          {product.map((product) => (
            <div  key={product.id} className="col-lg-3 col-6 text-lg-start g-4 ">
              <div className="card border-success">
                <div className="card-body text-center">
                  <Link className=" text-decoration-none" href={`/products/${product.id}`}>
                    <p className=" card-title text-success fw-bold">
                      {product.name}
                    </p>
                    <p className=" card-text text-success fw-semibold">
                      {product.description}
                    </p>
                    <p className=" card-text text-success fw-medium">
                      {product.price}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
