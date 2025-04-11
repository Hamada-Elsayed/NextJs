import api from "@/app/components/api";
import Link from "next/link";
import '../../globals.css'
export default async function images({ params }) {
  const { id } = params;
  const images = await api(`images/${id}`);

  if (!images) return <p className="p-4">images not found</p>;

  return (
    <div className="container-page">
      <div className="images-card">
        {/* images title and ID */}
        <div>
          <h1 className="images-title">images #{images.id}</h1>
          <h2 className="images-subtitle">{images.title}</h2>
        </div>

        {/* images content */}
        <p className="images-body">{images.body}</p>

        {/* Back link */}
        <Link href="/images" className="back-link">
          ← Back to images
        </Link>
      </div>
    </div>
  );
}
