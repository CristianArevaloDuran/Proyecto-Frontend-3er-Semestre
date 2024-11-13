'use client';

import './styles.css';

import getPost from '@/hooks/getPost/getPost';
import Post from '@/components/Post/Post';
import SideCursos from '@/components/SideCursos/SideCursos';
import Link from 'next/link';
import React from 'react';

export default function PostPage({ params }) {
  
  const unwrappedParams = React.use(params); // Unwrap the promise
  const { id } = unwrappedParams;

  const post = getPost(id);  
  
  return (
    <div className="container">
      <div className="recents-container">
        <div className='back'>
          <Link href="/" className='logo'>
            {
              post.loading ? "" : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
            }
            <h1 className="title">{post.post.markdown?.[0]?.title}</h1>
          </Link>
          <Link href={`/category/${post.post.markdown?.[0]?.category._id}`} className='category'>
            {post.post.markdown?.[0]?.category.name}
          </Link>
        </div>
        <div className="cards-container">
          <Post id={post._id} post={post} />
        </div>
      </div>
      <SideCursos />
    </div>
  );
}