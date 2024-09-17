import { useEffect, useState } from 'react';

export default function getPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:4000/markdowns')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data)
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    return { posts, loading };
}