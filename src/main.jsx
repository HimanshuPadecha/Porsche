import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LayoutOne from './LayoutOne'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutTwo from './LayoutTwo'
import LayoutOneHolder from './LayoutOneHolder'
import Login from './components/Login'
import { store } from './store/store'
import { Provider } from 'react-redux'
import AvailableCars, { getCars } from './components/AvailableCars'
import CarDetails, { getCarInfo } from './components/CarDetails'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayoutOne />}>
      <Route path='/' element={<LayoutOneHolder />} />
      <Route path='/tycan' element={<LayoutTwo />} />
      <Route path="/login" element={<Login usecase={"Login"}/>} />
      <Route path="/signup" element={<Login usecase={"Signup"} />} />
      <Route path="/availables" element={<AvailableCars /> } loader={getCars} />
      <Route path="/availables/:id" element={<CarDetails />} loader={getCarInfo}/>

    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
