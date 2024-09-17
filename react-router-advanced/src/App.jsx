import './App.css'
import { BrowserRouter as Routes, Switch, Route, Link, Redirect } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
     <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/profile" element={
          <ProtectedRoute>
           <Profile />
          </ProtectedRoute>}> 
          <Route path= "details" element={<ProfileDetails />} />
          <Route path= "settings" element={<ProfileSettings />} />
        </ Route>  
        <Route path='/blog/:id' element={<BlogPost />}/>
        <Route path='/login' element={<Login />}/>
     </Routes>
    </Routes>
  )
}

export default App;
