import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';


const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`; 
            setAuthenticated(true);   
        }

        setLoading(false)
    }, [])


    async function handleLogin(email, password) {
        try {
            const response = await api.post('api/auth/login', { email, password });
            setAuthenticated(true);
            setUser(response.data.user)
            localStorage.setItem('token', JSON.stringify(response.data.access_token));
            api.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;
            navigate('/home');
          } catch (err) {
            toast.error('E-mail ou senha incorretos.');
          }
    }

    async function handleLogout(email, password) {
        setAuthenticated(false)
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = undefined
        navigate('/');
    }

    if (loading) {
        return
    }

    return (
        <AuthContext.Provider value={{ user, authenticated, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };