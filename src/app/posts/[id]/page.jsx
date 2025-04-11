import api from "@/app/components/api";
import Link from "next/link";
import '../../globals.css'
export default async function Post({ params }) {
  const { id } = params;
  const post = await api(`posts/${id}`);

  if (!post) return <p className="p-4">Post not found</p>;

  return (
    <div className="container-page">
      <div className="post-card">
        {/* Post title and ID */}
        <div>
          <h1 className="post-title">Post #{post.id}</h1>
          <h2 className="post-subtitle">{post.title}</h2>
        </div>

        {/* Post content */}
        <p className="post-body">{post.body}</p>

        {/* Back link */}
        <Link href="/posts" className="back-link">
          ← Back to Posts
        </Link>
      </div>
    </div>
  );
}
