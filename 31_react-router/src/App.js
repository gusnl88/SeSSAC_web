import { Link, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Header from "./component/Header";
import "./style/Common.scss";
import ProductPage from './pages/ProductPage'
import { useEffect, useState } from "react";
import axios from 'axios'
import PhotoPage from "./pages/PhotoPage";
import ProductDetailPage from "./pages/ProductDetailPage";
function App() {
  const [products,setProducts]=useState([])
  const [photos,setPhotos]=useState([]);


  const getProducts=async ()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/comments')
    console.log(res.data[0])
    setProducts(res.data.slice(0,10))
  }
  const getPhotos=async ()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/photos')
    console.log("이미지",res.data[0])
    setPhotos(res.data.slice(0,10))
  }

  useEffect(()=>{
    getProducts();
    getPhotos();
  },[])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<Test></Test>} />
        <Route path="/products" element={<ProductPage products={products}/>}/>
        <Route path="/photos" element={<PhotoPage photos={photos}/>}/>
        <Route path="/products/:productId" element={<ProductDetailPage products={products}/>}/>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
