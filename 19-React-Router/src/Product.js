import { Link } from "react-router-dom";
const Product = () => {
  return (
    <section>
      <h2>Product Component</h2>
      <ul>
        <li>
         
          <Link to='/products/p1'>A book</Link>
        </li>
        <li>
         
          <Link to='/products/p2'>A carpet</Link>
        </li>
        <li>
         
          <Link to='/products/p3'>A Online cource</Link>
        </li>
      </ul>
    </section>
  );
};
export default Product;
