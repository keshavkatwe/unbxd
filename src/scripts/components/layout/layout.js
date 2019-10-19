import './layout.scss';
import Products from "../products/products";
import productSvc from "../../services/productSvc";
import Facets from "../facets/facets";
import HeaderView from "../header/header";

class Layout {
  constructor(ele) {
    this.ele = ele;
    this.products = [];
    this.isSideBarActive = false;
    this.searchQuery = "";
  }

  loadProducts() {
    productSvc.getProducts({search: this.searchQuery}).then(res => {
      const {response, facets} = res;
      const {products} = response;
      this.products = products;
      this.changeProducts();
      this.facetComp.loadFacets(facets);
    });
  }

  render() {
    this.ele.innerHTML = `
      <div class="main">
        <div class="header" id="header"></div>
        <div class="split">
          <a class="filter" href="javascript:void(0)" id="filter">Filter</a>
          <div class="left-bar" id="facets-list"></div>
          <div class="right-products" id="product-list"></div>
        </div>
      </div>
    `;

    this.afterRender();
  }

  afterRender() {
    new HeaderView(document.getElementById('header'), {
      onSearch: (val) => this.onSearch(val)
    }).render();
    this.facetComp = new Facets(document.getElementById('facets-list'));
    this.productsComponent = new Products(
        document.getElementById('product-list'),
        {
          products: this.products
        }
    );
    this.productsComponent.render();
    this.loadProducts();

    document.getElementById('filter').addEventListener('click', () => {
      this.isSideBarActive = !this.isSideBarActive;

      if (this.isSideBarActive) {
        document.getElementById(
            'facets-list').classList = "left-bar left-bar__active";
      } else {
        document.getElementById('facets-list').classList = "left-bar";
      }
    });
  }

  changeProducts() {
    this.productsComponent && this.productsComponent.changeProducts(
        {products: this.products});
  }

  onSearch(val) {
    this.searchQuery = val;
    this.loadProducts();
  }
}

export default Layout;