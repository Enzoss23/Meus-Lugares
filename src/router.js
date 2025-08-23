import Home from "./pages/home.js";
import AddEditPlace from "./pages/addEditPlace.js";
import PlaceDetails from "./pages/placeDetails.js";

const routes = {
  "/": Home,
  "/add": AddEditPlace,
  "/details": PlaceDetails,
};

export default function router() {
  const path = location.hash.slice(1) || "/";
  const app = document.getElementById("app");
  app.innerHTML = "";

  const Page = routes[path] ? routes[path] : Home;
  app.appendChild(Page());
}
