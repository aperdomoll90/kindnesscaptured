import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './routes/landing'
import Admin from './routes/admin'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/admin' element={<Admin/>} />
          <Route path='/' element={<Landing/>} />
          <Route path='*' element={<h1>404 Page not found</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
