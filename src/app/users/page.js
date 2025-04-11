

"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data.slice(0, 20)); // Slice the array to get the first 20 users
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts

    console.log(users); // This is fine for debugging, but you might want to remove it later

    return (
        <div className="container-page">
            {users.length > 0 ? (
                users.map((user) => {
                    return (
                        <div className="card" key={user.id}>
                            <div className="card-content">
                                <h1>{user.id}</h1>
                                <Link href={`/users/${user.id}`}> <p>{user.name}</p></Link>
                                
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>Loading...</p> // Show a loading message while fetching data
            )}
        </div>
    );
}
