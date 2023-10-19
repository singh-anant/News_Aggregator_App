export const SearchNews = async (query) => {
  const response = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`
  );
  const json = await response.json();
  return json?.hits;
};
