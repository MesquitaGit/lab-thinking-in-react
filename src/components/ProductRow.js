function ProductRow(props) {
  let color = '';
  if (!props.product.inStock) {
    color = 'red';
  }

  return (
    <tr>
      <td style={{ color: color }}>{props.product.name}</td>
      <td style={{ color: color }}>{props.product.price}</td>
    </tr>
  );
}

export default ProductRow;
