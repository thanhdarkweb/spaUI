import Home from "../pages/Home";
import About from "../pages/About";
import Pages from "../pages/Pages";
import News from "../pages/News";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import HomeLayout from "../components/Layout/HomeLayout";
import Shop from "../pages/Shop";

const publicRouter = [
  { path: "/", components: Home, layout: HomeLayout },
  { path: "/about", components: About },
  { path: "/pages", components: Pages },
  { path: "/news", components: News },
  { path: "/shop", components: Shop },
  { path: "/servieces", components: Services },
  { path: "/contact", components: Contact },
];

export { publicRouter };
