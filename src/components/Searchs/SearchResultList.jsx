import React from "react";
import Link from "next/link";

/**
 /*
echo "# mysql-crud" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/Jimmy-ui-maker/mysql-crud.git
  git push -u origin main
*/
 


export default function SearchResultList({ results }) {
  return (
    <div id="search-list" className=" container">
      <div className="row text-center justify-content-center align-items-center">
        <a className="btn text-decoration-none text-success mt-4 " href="/products">
          <i className="bi bi-chevron-right "></i>
        </a>
        {results.map((product) => (
          <div key={product.id} className="col-lg-3 col-6 text-lg-start g-4 ">
            <div className="card border-success">
              <div className="card-body text-center">
                <Link
                  className=" text-decoration-none"
                  href={`/products/${product.id}`}
                >
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
  );
}
