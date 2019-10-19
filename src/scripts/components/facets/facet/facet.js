import './facet.scss';

class Facet {
  constructor(data) {
    this.data = data;
  }

  render() {
    // console.log(this.data);
    const {displayName, values} = this.data;

    let valDom = [];

    if (Array.isArray(values)) {

      for (let i = 0; i < values.length; i += 2) {
        valDom.push(`
         <div class="facet__config">
            <label>
              <input type="checkbox" value="${values[i + 1]}">
              ${values[i]}
            </label>
          </div>
      `);
      }
    }

    return `
      <div class="facet">
        <h3 class="facet__title">${displayName}</h3>
        <div class="facet__configs">
          ${valDom.join("")}
        </div>
      </div>
    `;
  }
}

export default Facet;