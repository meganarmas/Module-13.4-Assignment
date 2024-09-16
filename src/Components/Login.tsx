import React, { useState } from "react";
import axios from "axios";
import SessionStorageManager from "./SessionStorageManager";
// https://fakestoreapi.com/auth/login

const Login: React.FC = () => {
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post<{ token: string }>('https://fakestoreapi.com/auth/login', {
                username,
                password
            });

            const jwtToken = response.data.token;
            setToken(jwtToken);
            setError(null);
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <SessionStorageManager token={token} />
        </div>
    );
};

export default Login;