import './product.scss';

class Product {
  constructor(data) {
    this.data = data;
  }

  render() {
    const {title, price, productImage, sku} = this.data;

    return `
      <div class="product">
        <img src="${productImage}" alt="">
        <div class="caption">
          <a href="http://demo-unbxd.unbxdapi.com/product?pid=${sku}" class="product__name">${title}</a>
          <h4 class="product__price">${price}</h4>
        </div>
      </div>
    `;
  }
}

export default Product;