import Link from 'next/link';
import './PostCard.css';

export default function PostCard({ post }) {
    const date = new Date(post.createdAt);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('es-ES', options);

    return (
        <div className='card-container'>
            <Link href={`post/${post._id}`} className="card">
                <div className="card-title">
                    <h3>{post.title}</h3>
                    <p>{post.category.name}</p>
                </div>
                <div className="card-divider">   
                </div>
                <div className="card-details">
                    <p>Dificultad: <span style={{color: post.difficulty.color}}>{post.difficulty.name}</span></p>
                    <p>{formattedDate}</p>
                </div>
            </Link>
        </div>
    )
}