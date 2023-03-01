import axios from "axios";
function FetchData(query) {
  return axios.get(
    `
      https://taupe-raven-gear.cyclic.app/api/products/search?q=${query}
    `
  );
}
export default FetchData;
