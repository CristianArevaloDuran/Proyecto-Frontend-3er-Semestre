import { useEffect, useState } from 'react';

export default function getPost(id) {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:4000/markdown/${id}`)
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