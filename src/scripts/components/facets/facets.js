import Facet from "./facet/facet";
import './facets.scss';

class Facets {
  constructor(ele) {
    this.ele = ele;
    this.facets = [];
  }

  render() {
    const facets = this.facets.filter(i => i.values.length).map(item => {
      return `
        <div class="facel__item">
          ${new Facet(item).render()}
        </div>
      `;
    });
    this.ele.innerHTML = `
      <div class="facets">
        ${facets.join("")}
      </div>
    `;
  }

  loadFacets(facets) {
    this.facets = Object.values(facets);
    this.render();
  }
}

export default Facets;