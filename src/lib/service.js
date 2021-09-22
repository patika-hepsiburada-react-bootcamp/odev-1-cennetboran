import axios from "axios";

const getData = async (userId) => {
  try {
    const { data: user } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const { data: userPosts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}` //To get users posts
    );

    return {
      ...user,
      userPosts,
    };
  } catch (err) {
    return err.message;
  }
};
export default getData;
