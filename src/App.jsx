import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";

import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Country from "./Pages/Country";
import Error from "./components/Ui/Error";
import CountryDetails from "./components/Layout/CountryDetails";

const App = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        // index :true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "country",
        Component: Country,
      },
      {
        path: "countryDetails/:id",
        Component: CountryDetails,
      },
    ],
  },
]);

export default App;
