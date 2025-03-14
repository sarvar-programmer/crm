import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from "./pages/Router/Router"
function App() {

  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
