import { Suspense } from 'react';
import Post from '@/components/Post/Post';

export default function PostPage({ params }) {
    return (
        <div>
            <Post id={params.id} />
        </div>
    );
}