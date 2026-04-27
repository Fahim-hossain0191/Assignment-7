import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.code}>404</h1>
                <h2 style={styles.title}>Page Not Found</h2>
                <p style={styles.text}>
                    Oops! The page you are looking for doesn’t exist or has been moved.
                </p>

                <Link to="/" style={styles.button}>
                    ⬅ Go Back Home
                </Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #00A896, #028090)',
        fontFamily: 'Arial, sans-serif',
    },
    card: {
        background: '#fff',
        padding: '40px',
        borderRadius: '20px',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        maxWidth: '400px',
        width: '90%',
    },
    code: {
        fontSize: '80px',
        margin: '0',
        color: '#028090',
    },
    title: {
        fontSize: '24px',
        margin: '10px 0',
        color: '#333',
    },
    text: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '20px',
    },
    button: {
        display: 'inline-block',
        padding: '10px 20px',
        background: '#00A896',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '10px',
        transition: '0.3s',
    }
};

export default ErrorPage;