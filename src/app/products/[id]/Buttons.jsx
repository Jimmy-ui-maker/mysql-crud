"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

function Buttons({ productId }) {
  const router = useRouter();

  return (
    <div className="d-flex justify-content-between align-items-center">
      <button
        className="btn btn-outline-danger btn-md  fw-semibold"
        onClick={async () => {
          if (confirm("are you sure you want to delete this prodcut?")) {
            const res = await axios.delete("/api/products/" + productId);
            if (res.status === 204) {
              router.refresh();
              router.push("/products");
            }
          }
        }}
      >
        Delete
      </button>
      <button
        className="btn btn-outline-success btn-md fw-semibold"
        onClick={() => {
          router.push(`/edit/${productId}`);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default Buttons;
