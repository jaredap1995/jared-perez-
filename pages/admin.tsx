import { useState, useEffect } from 'react';

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const password = 'not_very_secure';
        const userInput = window.prompt('Enter Password');

        if (userInput === password) {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password");
            window.location.href = "/";
        }
    }, []);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const response = await fetch('/api/add-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content })
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message);
        } else {
            alert('error saving post');
        }

        console.log({ title, author, content });
    };

    if (!isAuthenticated) {
        return <div>Loading....</div>;
    }

    return (
        <div>
            <h1> Admin - Add New Post </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title: </label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label> Author: </label>
                    <input
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    <label> Content: </label>
                    <input
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type='submit'> Add New Post </button>
            </form>
        </div>
    );
}

export default AdminPage;
