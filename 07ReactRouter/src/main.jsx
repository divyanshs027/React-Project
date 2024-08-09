import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Laylot from './Laylot.jsx'
import Home from './component/home/Home.jsx'
import About from './component/about/About.jsx'
import ContactUs from './component/conatctUs/ContactUs.jsx'
import User from './component/User/User.jsx'
import Github, {GithubInfoLoader} from './component/Github/Github.jsx'




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Laylot />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contactUs",
//         element: <ContactUs />
//       }
      
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Laylot />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contactUs' element={<ContactUs />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route
      loader={GithubInfoLoader}
       path='Github' 
       element={<Github />} />
      
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
