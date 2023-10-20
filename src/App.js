import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import NewsContainer from "./pages/NewsContainer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NewsDetailsContainer from "./pages/NewsDetailsContainer";
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <NewsContainer />,
    },
    {
      path: "details/:id",
      element: <NewsDetailsContainer />,
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
