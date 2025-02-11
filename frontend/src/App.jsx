import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import User from './components/getUser/User'
import Add from './components/addUser/Add'
import Edit from './components/updateUser/Edit'

function App() {

  const route = createBrowserRouter([
    {
      path : "/",
      element : <User/>,
    },
    {
      path : "/create",
      element : <Add/>,
    },
    {
      path : "/update/:id",
      element : <Edit/>,
    },
    {
      path : "/delete",
      element : "deleteUser",
    },
  ])



  return (
    <>
    <div>
      <RouterProvider router={route}/>
    </div>
    </>
  )
}

export default App
