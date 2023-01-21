import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div>
      <div>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.filteredProducts.map((product) => {
            return <ProductRow product={product} />;
          })}
        </tbody>
      </div>
    </div>
  );
}

export default ProductTable;
