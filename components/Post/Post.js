'use client'

import './styles.css'; 

import Loader from '@/components/Loader/Loader';
import Markdown from 'markdown-to-jsx';

export default function Post({ post }) {
    return (
        <div className='post'>
            {
                post.loading ? <Loader /> : <Markdown>{post.post.content}</Markdown>
            }
        </div>
    );
}