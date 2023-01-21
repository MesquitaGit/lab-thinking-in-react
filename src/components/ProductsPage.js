import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(jsonData);

  function handleSearch(keyword) {
    const filteredProducts = [...products].filter((product) => {
      return product.name.toLowerCase().includes(keyword.toLowerCase());
    });

    setFilteredProducts(filteredProducts);
  }

  return (
    <div>
      <h1>IronStore</h1>
      <div>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div>
        <ProductTable filteredProducts={filteredProducts} />
      </div>
    </div>
  );
}

export default ProductsPage;
