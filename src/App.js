import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";

// layers
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="contact" element={<Contact />} action={contactAction}/>
        <Route path="faq" element={<Faq />} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
