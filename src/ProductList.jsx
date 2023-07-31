import Product from "./Product";

export default function ProductList(props) {
  const {products, onDeleteClick} = props;
  
  return <ul>
  {products.map(product => <li key={product.id}>
    <Product product={product} />
    <button onClick={() => onDeleteClick(product.id)}>Delete</button>
  </li>)}
</ul>
}