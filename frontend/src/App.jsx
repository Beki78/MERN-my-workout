import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import NavBar from './components/NavBar'
function App() {


  return (
    <div className='h-screen bg-slate-200'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
