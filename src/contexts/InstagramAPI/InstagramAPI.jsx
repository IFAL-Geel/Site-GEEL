// ApiContext.js
import React, { createContext, useContext, useState, useEffect } from 'react'

const ApiContext = createContext()

export function ApiProvider({ children }) {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const token = "IGQWRNRzlPWjgyeHVBSktVN0ZAYWjM1SjlLWlRwOWJBSUhWcGd0dGVLZA3lSclU5RV81aEJwRDRSYjF3Xy1ZAN2s0T0ttYWdPcFNCLUlxU1ZA4eDdvTjJneG9Jb3ZATV1U4bWxYYjdOQWk1ZATE0Y3JWUG5vWmtDSjNrUjgZD";
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
        <ApiContext.Provider value={{ posts }}>
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
