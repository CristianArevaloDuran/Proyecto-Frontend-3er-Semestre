'use client'

import './styles.css'; 

import getPost from '@/hooks/getPost/getPost';
import Loader from '@/components/Loader/Loader';
import Markdown from 'markdown-to-jsx';

export default function Post({ id }) {
    const { post, loading } = getPost(id);
    console.log(post);
    
    return (
        <div>
            {
                loading ? <Loader /> : <Markdown>{post.content}</Markdown>
            }
        </div>
    );
}