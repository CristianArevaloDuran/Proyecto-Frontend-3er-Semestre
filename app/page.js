'use client'

import getPosts from "@/hooks/getPosts/getPosts";
import Loader from "@/components/Loader/Loader";
import SideCursos from "@/components/SideCursos/SideCursos";


import "../generalStyles/styles.css";
import './styles.css'

export default function Home() {
  const posts = getPosts();
  
  return (
    <div className="container">
      <div className="recents-container">
        
      </div>
      <SideCursos />
    </div>
  );
}
