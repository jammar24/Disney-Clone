import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import Disney from './Pages/Disney'


function App() {

  return (
    <>   
     

    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
  
      <Route element={<ProtectedRoutes/>}>
      <Route path='/mon' element={<Disney/>}  />
      </Route>
       
    
     </Routes>
    </div>

    
  
  
    </>
  )
}

export default App
