// ApiContext.js
import React, { createContext, useContext, useState, useEffect } from 'react'

const ApiContext = createContext()

export function ApiProvider({ children }) {
    const [posts, setPosts] = useState(null)

    const fetchData = async () => {
        const token = "IGQWRONi1uUm9vazI1U0ZABSkxLUFZAlQS1wZADZAEZAWF1UjNaU2h5dTV2NVlvTjhNdGExY0hDTzloOTlLWXN0YVltX0FTLWl3bnJQSmFrMDBkYjIxRl9ONjBIZAFQzNnI1NVNYNUFsNFdETVdWdzVXQVJsVEJmLXpCVkkZD";
        const basicUrl = `https://graph.instagram.com/me/media?fields=caption,id,media_type,timestamp,thumbnail_url,media_url&access_token=${token}`;

        try {
            const response = await fetch(basicUrl)
            const data = await response.json()
            setPosts(data)
            sessionStorage.setItem('@Instagram:Posts', JSON.stringify(data))
        } catch (error) {
            console.error("Erro na solicitação:", error)
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (!posts) {
            const storedData = sessionStorage.getItem('@Instagram:Posts')
            if (storedData) {
                setPosts(JSON.parse(storedData));
            } else {
                fetchData()
            }
        }
    }, [posts])

    return (
        <ApiContext.Provider value={{ posts, fetchData }}>
            {children}
        </ApiContext.Provider>
    );
}

export function useApi(){
    const context = useContext(ApiContext)
    if (!context) {
        throw new Error('useApi must be used within an ApiProvider')
    }
    return context
}
