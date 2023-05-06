import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// App
import App from './components/app/App';
import ErrorPage from './components/app/ErrorPage';

// About
import About from './components/about/About';
import Contact from './components/about/Contact';

// education
import Skills from './components/education/Skills';

// home
import Home from './components/home/Home';
import Preview from './components/home/Preview';

// sites
import Websites from './components/sites/Websites';
import Games from './components/sites/Games';


import "./index.css"

const appElement = document.getElementById('app');
const root = createRoot(appElement);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "websites",
        element: <Websites />
      },
      {
        path: "games",
        element: <Games />
      },
      {
        path: "preview",
        element: <Preview />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])


root.render(<RouterProvider router = {router} />);