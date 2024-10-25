import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Images from './Images.jsx'
import Videos from './Videos.jsx'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {  path: "/",   element: <Images />  },
      {  path: "/videos",   element: <Videos />  },

       ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
