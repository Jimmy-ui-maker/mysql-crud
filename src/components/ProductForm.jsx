"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ProductForm() {
  const [products, setProducts] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const form = useRef(null);
  const router = useRouter();

  const handleChange = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(products);

    const res = axios.post("/api/products", products);
    console.log(res);
    //form.current.reset()
    router.refresh();
    router.push("/");
  };
  return (
    <section
      id="add-product"
      className=" shadow-sm w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-5 ">
            <div className="card border-success shadow mt-2  ">
              <a className="btn text-decoration-none text-success " href="/">
                <i className="bi bi-chevron-left "></i>
              </a>
              <div className="card-body ">
                <h1 className="text-center text-success mb-4">
                  New Product Page
                </h1>

                <form onSubmit={handleSubmit} ref={form}>
                  <div className="mb-2">
                    <label className="text-success">Product Name</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control shadow-none border-success text-success"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-2">
                    <label className="text-success">Product Description</label>
                    <input
                      name="description"
                      type="text"
                      className="form-control shadow-none border-success text-success"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="text-success">Product Price</label>
                    <input
                      name="price"
                      type="number"
                      className="form-control shadow-none border-success text-success"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="d-grid mt-2">
                    <button
                      type="submit"
                      className="btn btn-outline-success fw-bold"
                    >
                      Add Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
