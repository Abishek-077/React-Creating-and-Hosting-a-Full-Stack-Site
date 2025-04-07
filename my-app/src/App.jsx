import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesListPage from './pages/ArticlesList'
import ArticlePage from './pages/ArticlePage'
import Layout from './Layout'
import NotFoundPage from './NotFoundPage'


const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '', // 👈 this is the root route ("/")
        element: <HomePage />,
        errorElement: <div>Page not found</div>,
      },
      {
        path: 'about', // 👈 relative path becomes "/about"
        element: <AboutPage />,
        errorElement: <div>About Page not found</div>,
      },
      {
        path: 'articles',
        element: <ArticlesListPage />,
        errorElement: <div>Page not found</div>,
      },
      {
        path: 'articles/:name',
        element: <ArticlePage />,
        errorElement: <div>Page not found</div>,
      },
    ],
  },
];





const router = createBrowserRouter(routes)


function App() {

  return (
    <>
      <RouterProvider router={router} />

    </>


  );
}

export default App;
