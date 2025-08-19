import { Link } from "react-router-dom";
import { useCart } from "./CartContext.jsx"; // ✅ Import context
import { toast } from "react-toastify";
function ProductCard({ product }) {
  const { addToCart } = useCart(); // ✅ Lấy hàm thêm vào giỏ hàng

  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition cursor-pointer">
      <Link to={`/products/${product.id || product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl mb-3"
        />
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-pink-600 font-bold text-xl">
          {product.price.toLocaleString("vi-VN")}đ
        </p>
      </Link>
      <button
        className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-xl hover:bg-pink-700 transition"
        onClick={(e) => {
          e.preventDefault();
          addToCart({ ...product, id: product.id || product._id }, 1); // ✅ đảm bảo có id
          toast.success("Đã thêm sản phẩm vào giỏ hàng thành công!");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
