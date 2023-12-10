import { Container, Pagination } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from 'axios'
import { useEffect, useState } from "react";
import { BrowserRouter , Routes , Router, Route} from 'react-router-dom'
import MovieDetials from "./components/MovieDetials";



function App() {
  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const getAllMovies = async () => {
    const res =  await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a88185be07915e578e6855e52daf4af7&language=ar")
   
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
    if((res.data.total_pages) >= 500){
      setPageCount(500)
      
    }
   
  }

  const getAllPages = async (num) => {
    const res =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a88185be07915e578e6855e52daf4af7&language=ar&page=${num}`)
   
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
    if((res.data.total_pages) >= 500){
      setPageCount(500)
      
    }
  }


  useEffect(()=> {
    getAllMovies() ;
    console.log(movies)
  } , [])

  const search = async (word) => {
    if (word===""){
      getAllMovies();
    }else {
      const res =  await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=a88185be07915e578e6855e52daf4af7`)
   
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
    if((res.data.total_pages) >= 500){
      setPageCount(500)
      
    }}
  }
  return (
    <div className="font color-body">
    <NavBar search={search}/>
   <Container>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <MoviesList movies={movies} getAllPages={getAllPages} pageCount={pageCount}/>}/>
      <Route path="/movie/:id" element={ <MovieDetials />}/>
   
    </Routes>
    </BrowserRouter>
   </Container>
  
   </div>
  );
}

export default App;
