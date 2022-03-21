import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My latest personal projects</h1>
        <p className="pl-desc">
          I believe in learning by doing. This is why i try to implement new technologies in my projects so i can know what it looks like to use it outside the tutorials and documentations.
          All these project's source codes are publicly available on my <a href="https://github.com/ayoub3bidi" target="_blank" rel="noopener noreferrer">GitHub</a> account (projects builded with others are not included here).
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        )).reverse()}
      </div>
    </div>
  );
};

export default ProductList;