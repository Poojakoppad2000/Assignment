import React, { useState, useEffect } from "react";

const API_URL = "https://dummyjson.com/products";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Adjust the number of items per page as needed

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data.products); // Access the 'products' array from the API response
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Pagination logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-lg font-bold mb-4">${product.price}</p>
              <a
                href={`/products/${product.id}`}
                className="text-blue-500 hover:underline"
              >
                View Product
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <ul className="inline-flex space-x-2">
          {[...Array(Math.ceil(products.length / itemsPerPage)).keys()].map(
            (number) => (
              <li key={number + 1}>
                <button
                  onClick={() => paginate(number + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === number + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {number + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
