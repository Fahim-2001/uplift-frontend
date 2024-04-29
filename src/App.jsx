// import { Button } from '@mui/material'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='mx-5'>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer/>
    </div>
  )
}

export default App
