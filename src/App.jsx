import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Post from './pages/Post'
import Posts from './pages/Posts'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/post' element={<Post />} />
          <Route exact path='/posts' element={<Posts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
