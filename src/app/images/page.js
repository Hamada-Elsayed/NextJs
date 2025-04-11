import Link from "next/link";

export default async function Images() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/')
    const imgresult = await response.json();
    const first20Images = imgresult.slice(0, 15);
return (
    <div className="container-page">

        {
            first20Images ? first20Images.map((i)=>{
                return (
                    <div className="card" key={i.id}>
                        <div className="card-content">
                        <h1>{i.id}</h1>
                        <Link href={`/images/${i.id}`}><p >{i.title.slice(0,30)}</p></Link>
                        
                        </div>

                    </div> 

                )

                
            }) :null
        }
    </div> 
    






  )
}
