import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

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
      }
    ]
  }
])

root.render(<RouterProvider router = {router} />);