import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import SignIn from './Pages/SignIn'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
