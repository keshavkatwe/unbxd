import Product from "./product/product";
import './products.scss';

class Products {
  constructor(ele, {products}) {
    this.ele = ele;
    this.productsList = products;
  }


  changeProducts({products}){
    this.productsList = products;
    this.render();
  }

  render() {

    const products = this.productsList.map(item => {
        return `
          <div class="product__item">
            ${new Product(item).render()}
          </div>
        `;
    });

    this.ele.innerHTML = `
      <div class="products">
        ${products.join("")}
      </div>
    `;
    this.afterRender();
  }

  afterRender() {

  }
}

export default Products;