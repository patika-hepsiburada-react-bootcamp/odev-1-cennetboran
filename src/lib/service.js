import "regenerator-runtime/runtime";
import axios from "axios";

async function getData(userId) {
  let data = null;

  await axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      data = res.data;
    });
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => {
      data.posts = res.data;
    });
  return data;
}
export default getData;
