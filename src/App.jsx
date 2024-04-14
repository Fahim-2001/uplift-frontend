// import { Button } from '@mui/material'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'

function App() {

  return (
    <div className='mx-5'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App
