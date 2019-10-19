import './header.scss';

class Header {
  constructor(ele, {onSearch}) {
    this.ele = ele;
    this.timer = null;
    this.onSearch = onSearch;
  }

  render() {
    this.ele.innerHTML = `
      <div class="header">
        <div class="search">
          <input id="searchBox" type="text" placeholder="Search">
        </div>
      </div>
    `;

    this.afterRender();
  }

  afterRender() {

    document.getElementById('searchBox').addEventListener('keyup', (e) => {
      if (this.timer){
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.onSearch && this.onSearch(e.target.value);
        clearTimeout(this.timer);
      }, 300);
    });
  }
}

export default Header;