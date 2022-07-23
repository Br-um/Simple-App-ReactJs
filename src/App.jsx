import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Post from './pages/Post'
import Posts from './pages/Posts'
import EditProduct from './pages/EditProduct'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/post' element={<Post />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/edit/:id' element={<EditProduct />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
