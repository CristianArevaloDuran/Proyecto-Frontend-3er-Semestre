import { useEffect, useState } from 'react';

export default function useDelPost(id) {
    const [isDelete, setIsDelete] = useState(false);
    const [loading, setLoading] = useState(false);
    
    function deletePost(id) {
        fetch(`http://localhost:4000/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.ok) {
                window.location.reload();
                return response.json()
            }
        })
        .then((data) => {
            setIsDelete(true);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return { isDelete, loading, deletePost };
}