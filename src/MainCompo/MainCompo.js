import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Resume from "../Components/Resume/Resume";
import { v4 as uuidv4 } from "uuid";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import Certifications from "../Components/Certifications/Certifications";
import Card from "../Components/Certifications/Card";

export default function MainCompo() {
  // uuid react-spring react-spring-3d-carousel

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="/img/certificates/publication1-logo.png"
          viewImage="/img/certificates/publication1.jpeg"
          duration="20th-21st April 2023"
          title="Paper Publication"
          text="IEEE National Studemts's Conference on Innovation In Rural Development"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="/img/certificates/publication2-logo.png"
          viewImage="/img/certificates/publication2.jpeg"
          duration="12th-13th May 2023"
          title="International Conference"
          text="International Conference On “Innovation in Engineering, Technology, Science and Management (ICIETSM-2023)"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="/img/certificates/encypherist-logo.png"
          viewImage="/img/certificates/sql-workshop.jpeg"
          duration="7th Oct 2022"
          title="Hands on Advanced SQL Workshop"
          text="Encypherist Department of Computer Science and Engineering and Artificial Intelligence and Machine Learning"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="/img/certificates/jit-logo.png"
          viewImage="/img/certificates/diposave.jpeg"
          duration="15th Nov 2021"
          title="Diposave"
          text="1st position, Organized by Jhulelal Institute Of Technology, Nagpur"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="/img/certificates/src2.png"
          viewImage="/img/certificates/rangoli.jpeg"
          duration="2nd-6th Nov 2021"
          title="Rangoli Competition"
          text="Student's Representative Council, Jhulelal Institute of Technology, Nagpur"
        />
      ),
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/certificates",
      element: (
        <Certifications
          cards={cards}
          height="500px"
          width="64%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      ),
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
