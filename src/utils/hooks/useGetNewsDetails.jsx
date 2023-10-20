import { useEffect, useState } from "react";

const useGetNewsDetails = (id) => {
  const [newsDetails, setNewsDetails] = useState();
  useEffect(() => {
    getNewsDetails();
  }, []);
  async function getNewsDetails() {
    const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
    const json = await response.json();
    setNewsDetails(json);
  }
  return newsDetails;
};

export default useGetNewsDetails;
