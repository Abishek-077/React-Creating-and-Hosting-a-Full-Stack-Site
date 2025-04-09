import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesList';
import Layout from './Layout'; // <-- fixed import
import NotFoundPage from './NotFoundPage';

const routes = [
  {
    path: '/',
    element: <Layout />, // <-- fixed usage
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/articles', element: <ArticlesListPage /> },
      { path: '/articles/:name', element: <ArticlePage /> }, // url parmater
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
