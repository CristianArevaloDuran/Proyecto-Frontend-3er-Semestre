'use client'

import getPosts from "@/hooks/getPosts/getPosts";
import Loader from "@/components/Loader/Loader";
import SideCursos from "@/components/SideCursos/SideCursos";
import PostCard from "@/components/PostCard/PostCard";


import "../generalStyles/styles.css";
import './styles.css'

export default function Home() {
  const posts = getPosts();
  
  return (
    <div className="container">
      <div className="recents-container">
        <div className="head">
          <h2>Recientes</h2>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.5007 27.8335L27.834 25.5002L21.6673 19.3335V11.6668H18.334V20.6668L25.5007 27.8335ZM20.0007 36.6668C17.6951 36.6668 15.5284 36.2293 13.5007 35.3543C11.4729 34.4793 9.70898 33.2918 8.20898 31.7918C6.70898 30.2918 5.52148 28.5279 4.64648 26.5002C3.77148 24.4724 3.33398 22.3057 3.33398 20.0002C3.33398 17.6946 3.77148 15.5279 4.64648 13.5002C5.52148 11.4724 6.70898 9.7085 8.20898 8.2085C9.70898 6.7085 11.4729 5.521 13.5007 4.646C15.5284 3.771 17.6951 3.3335 20.0007 3.3335C22.3062 3.3335 24.4729 3.771 26.5007 4.646C28.5284 5.521 30.2923 6.7085 31.7923 8.2085C33.2923 9.7085 34.4798 11.4724 35.3548 13.5002C36.2298 15.5279 36.6673 17.6946 36.6673 20.0002C36.6673 22.3057 36.2298 24.4724 35.3548 26.5002C34.4798 28.5279 33.2923 30.2918 31.7923 31.7918C30.2923 33.2918 28.5284 34.4793 26.5007 35.3543C24.4729 36.2293 22.3062 36.6668 20.0007 36.6668ZM20.0007 33.3335C23.6951 33.3335 26.8409 32.0349 29.4382 29.4377C32.0354 26.8404 33.334 23.6946 33.334 20.0002C33.334 16.3057 32.0354 13.1599 29.4382 10.5627C26.8409 7.96544 23.6951 6.66683 20.0007 6.66683C16.3062 6.66683 13.1604 7.96544 10.5632 10.5627C7.96593 13.1599 6.66732 16.3057 6.66732 20.0002C6.66732 23.6946 7.96593 26.8404 10.5632 29.4377C13.1604 32.0349 16.3062 33.3335 20.0007 33.3335Z" fill="#676767"/>
          </svg>
        </div>
        <div className="cards-container">
          {
            posts.loading ? <Loader /> : posts.posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))
          }
        </div>
      </div>
      <SideCursos />
    </div>
  );
}
