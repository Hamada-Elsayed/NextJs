import Image from "next/image";
import Todos from "./todos/page";
import Posts from "./posts/page";
import Images from "./images/page";
import Footer from "./footer/page";


export default function Home() {
  return (
    <>
      <div className="home">
          <div>
            <h3>Hello</h3>
            <p>Welcome to my first Next.js project!</p>
            <p>Fetch data from a fake API in different ways.</p>

          </div>
          <div>
             <Image src="next.svg" alt="#" width={300} height={300}/>
            
          </div>
       </div>
       <h4>fetch Todos data </h4>
       <Todos/>
       <h4>fetch posts data </h4>
       <Posts/>
       <h4>fetch images data </h4>
       <Images/>
       <Footer/>
    </>

  );
}
