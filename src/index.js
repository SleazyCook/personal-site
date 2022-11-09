import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Skills from './components/Skills';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Websites from './components/Websites';
import Games from './components/Games';
import School from './components/School';
import Freelance from './components/Freelance';
import Preview from './components/Preview';
import Contact from './components/Contact';
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
        path: "freelance",
        element: <Freelance />
      },
      {
        path: "school",
        element: <School />
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