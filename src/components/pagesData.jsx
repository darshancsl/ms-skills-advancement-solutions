import About from "../pages/About";
import Certifications from "../pages/Certifications";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import HomePage from "../pages/HomePage";

const pagesData = [
  {
    id: 1,
    path: "",
    element: <HomePage />,
    title: "Home",
  },
  {
    id: 2,
    path: "about",
    element: <About />,
    title: "About",
  },
  {
    id: 3,
    path: "courses",
    element: <Courses />,
    title: "Courses",
  },
  {
    id: 4,
    path: "trainings-and-certifications",
    element: <Certifications />,
    title: "Trainings & Certifications",
  },
  {
    id: 5,
    path: "contact",
    element: <Contact />,
    title: "Contact",
  },
];

export default pagesData;
