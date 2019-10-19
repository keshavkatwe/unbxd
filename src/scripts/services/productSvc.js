function getProducts({search = "*"}) {
  search = search || "*";
  return fetch(
      'https://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?&q=' + search)
  .then(res => res.json());
}

export default {
  getProducts
};