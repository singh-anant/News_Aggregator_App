export const GetNewsDetails = async (id) => {
  const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
  const json = await response.json();
  console.log(json);
};
