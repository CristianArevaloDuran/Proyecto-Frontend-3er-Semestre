import { useEffect, useState } from 'react';

export default function getPost() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:4000/markdown/66e7c6dae71b6414fc0320b1')
            .then((response) => response.json())
            .then((data) => {
                setPost(data)
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    return { post, loading };
}