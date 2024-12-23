import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import SignIn from './Pages/SignIn'
import { Repo } from './Pages/Repo'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/repo' element={<Repo/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
