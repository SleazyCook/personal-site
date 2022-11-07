import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Games from './components/Games';
import School from './components/School';
import Work from './components/Work';
import Preview from './components/Preview';

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
        path: "portfolio",
        element: <Portfolio />
      },
      {
        path: "games",
        element: <Games />
      },
      {
        path: "work",
        element: <Work />
      },
      {
        path: "school",
        element: <School />
      },
      {
        path: "preview",
        element: <Preview />
      }
    ]
  }
])


root.render(<RouterProvider router = {router} />);