"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Todos() {
    const [first20Todos, setFirst20Todos] = useState([]); // Renamed to first20Todos for clarity

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
            const todos = await response.json();
            setFirst20Todos(todos.slice(0, 10)); // Changed to 20 to match the variable name
        };

        fetchData();
    }, []);

    return (
        <div className="container-page">
            {first20Todos.length > 0 ? first20Todos.map((i) => {
                return (
                    <div className="card" key={i.id}>
                        <div className="card-content">
                            <h1>{i.id}</h1>
                            <Link href={`/todos/${i.id}`}> <p>{i.title.slice(0, 30)}</p></Link>
                            
                        </div>
                    </div>
                );
            }) : <p>Loading...</p>} 
        </div>
    );
};
