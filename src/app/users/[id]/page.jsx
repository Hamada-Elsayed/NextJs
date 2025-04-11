import api from "@/app/components/api";
import Link from "next/link";
import '../../globals.css'
export default async function Post({ params }) {
  const { id } = params;
  const users = await api(`users/${id}`);

  if (!users) return <p className="p-4">users not found</p>;

  return (
    <div className="container-page">
      <div className="card">
        {/* Post title and ID */}
        <div>
          <h1 >users #{users.id}</h1>
          <h2>{users.title}</h2>
        </div>
        <p className="post-body">{users.body}</p>
        <Link href="/users" className="back-link">
          ← Back to users
        </Link>
      </div>
    </div>
  );
}
