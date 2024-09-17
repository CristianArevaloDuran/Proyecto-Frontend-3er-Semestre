import { useEffect, useState } from 'react';

export default function getCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:4001/categories')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data)
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    return { categories, loading };
}