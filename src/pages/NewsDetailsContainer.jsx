import { useParams } from "react-router-dom";
import Header from "../shared/Header";
import useGetNewsDetails from "../utils/hooks/useGetNewsDetails";
import NewsDetails from "../components/NewsDetails";

const NewsDetailsContainer = () => {
  const { id } = useParams();
  const getNewsDetails = useGetNewsDetails(id);
  if (!getNewsDetails) return null;
  return (
    <div>
      <Header />
      <NewsDetails
        title={getNewsDetails?.title}
        author={getNewsDetails?.author}
        points={getNewsDetails?.points}
        commentsObj={getNewsDetails?.children}
        date={getNewsDetails?.created_at}
      />
    </div>
  );
};

export default NewsDetailsContainer;
