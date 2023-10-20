import { Link } from "react-router-dom";

const NewsCards = ({ title, author, url, date, objectID }) => {
  return (
    <div className=" m-3 flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl border-solid border-2 border-stone-950">
      <div className="p-6">
        <h5 className="block mb-2 font-serif text-3xl border-b-2 border-black  font-semibold  text-blue-gray-900">
          {title}
        </h5>
        <div className="flex-col text-2xl">
          <p>
            <span className="text font-bold">Author Name-</span>
            {author}
          </p>
          <p>
            <span className="text font-bold">Published At-</span>
            {date.substring(0, date.indexOf("T"))}
          </p>
        </div>
      </div>
      <div className="p-6 pt-0 flex justify-between ">
        <a
          href={url}
          className=" cursor-pointer select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Go To
        </a>
        <Link
          to={"/details/" + objectID}
          className="cursor-pointer select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCards;
