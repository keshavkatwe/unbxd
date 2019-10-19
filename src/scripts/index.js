import './index.scss';
import Layout from "./components/layout/layout";

class App {
  constructor(ele) {
    this.ele = ele;
  }

  render() {
    new Layout(this.ele).render();
  }
}

new App(document.getElementById('app')).render();