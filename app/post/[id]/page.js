'use client';

import './styles.css';

import Post from '@/components/Post/Post';
import SideCursos from '@/components/SideCursos/SideCursos';

export default function PostPage({ params }) {
    return (
    <div className="container">
      <div className="recents-container">
        <div className="cards-container">
        <div>
            <Post id={params.id} />
        </div>
        </div>
      </div>
      <SideCursos />
    </div>
    );
}