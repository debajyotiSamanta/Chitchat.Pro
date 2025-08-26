import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';
import AuthForm from './AuthForm';
import InputField from './InputField';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();

    // --- MOCK LOGIN FOR FRONTEND TESTING ---
    console.log("Simulating login...");
    setIsLoading(true);

    // Simulate a 1-second network delay
    setTimeout(() => {
        console.log("Mock login successful! Navigating to chat layout...");
        // Set the dummy authentication status so the ProtectedRoute will let you pass.
        sessionStorage.setItem('isAuthenticated', 'true');

        navigate('/'); // Now this navigation will succeed.
        
    }, 1000);
    
    // --- REAL FIREBASE CODE IS COMMENTED OUT ---
    /*
    setIsLoading(true);
    setError('');
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
    } catch (err) {
        setError(err.message.replace('Firebase: ', ''));
    } finally {
        setIsLoading(false);
    }
    */
};

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        setError('');
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate('/');
        } catch (err) {
            setError(err.message.replace('Firebase: ', ''));
        } finally {
            setIsLoading(false);
        }
    };

    const fields = [
        {
            id: 'email',
            component: <InputField label="Email Address" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        },
        {
            id: 'password',
            component: <InputField label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
        }
    ];

    return (
        <AuthForm
            title="Welcome Back!"
            formType="login"
            fields={fields}
            handleSubmit={handleLogin}
            buttonText="Log In"
            footerText="Don’t have an account?"
            footerLink="/register"
            footerLinkText="Sign Up"
            error={error}
            isLoading={isLoading}
            onGoogleSignIn={handleGoogleSignIn}
        />
    );
};

export default LoginPage;