import api from "../components/api";
import Link from "next/link";
export default async function posts(){


        const postdata =  await api("posts");
 

    return (
        <div className="container-page">
        {postdata.length > 0 ? postdata.map((i) => {
            return (
                <div className="card" key={i.id}>
                    <div className="card-content">
                        <h1>{i.id}</h1>
                        <Link href={`/posts/${i.id}`}>{i.title} </Link>
                    </div>
                </div>
            );
        }).slice(0,10) : <p>Loading...</p>} {/* Display a loading message if there are no todos */}
    </div>

    )

}


// <div className="container-page">

// {
//     postdata ? postdata.map((i)=>{
//         return (
//             <div className="card" key={i.id}>
//                 <div className="card-content">
//                     <h1>{i.id}</h1>
//                     <Link href={`/posts/${i.id}`}>
//                     <h2>{i.title}</h2>
//                     </Link>

//                 </div>

//             </div> 

//         )

        
//     }) :null
// }
// </div> 