import axios from "axios";
import Buttons from "./Buttons";
import { conn } from "@/libs/mysql";

async function loadProduct(productId) {
  //const res = await axios.get('http://localhost:3000/api/products'+productId)
  const [data] = await conn.query("SELECT * FROM product WHERE id = ?", [
    productId,
  ]);
  return data;
}

async function ProductPage({ params }) {
  const product = await loadProduct(params.id);

  return (
    <section
      id="product-details"
      className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className=" container">
        <div className="row g-4 text-center justify-content-center align-items-center ">
          <h1 className=" text-success">Product details Page</h1>
          <hr className=" text-success" />
          <div className="col-lg-3 col-6 text-lg-start">
            <div className="card border-success">
              <a
                className="btn text-decoration-none text-success"
                href="/products"
              >
                <i className="bi bi-chevron-right "></i>
              </a>
              <div className="card-body">
                <p className=" card-title text-success fw-bold">
                  {product.name}
                </p>
                <p className=" card-text text-success fw-semibold">
                  {product.description}
                </p>
                <p className=" card-text text-success fw-medium">
                  {product.price}
                </p>
                <hr className=" text-success" />
                <Buttons productId={product.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
