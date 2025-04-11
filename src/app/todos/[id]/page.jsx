import api from "@/app/components/api";
import Link from "next/link";
import '../../globals.css'
export default async function Post({ params }) {
  const { id } = params;
  const todos = await api(`todos/${id}`);

  if (!todos) return <p className="p-4">todos not found</p>;

  return (
    <div className="container-page">
      <div className="card">
        {/* Post title and ID */}
        <div>
          <h1 >todos #{todos.id}</h1>
          <h2>{todos.title}</h2>
        </div>
        <p className="post-body">{todos.body}</p>
        <Link href="/todos" className="back-link">
          ← Back to todos
        </Link>
      </div>
    </div>
  );
}
