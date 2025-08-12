import React, { useEffect, useState } from "react";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/linkedin-posts")
      .then((res) => res.json())
      .then((data) => {
        const processed = data.slice(0, 3).map((post) => {
          const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
          return {
            ...post,
            image: imgMatch ? imgMatch[1] : null,
          };
        });
        setPosts(processed);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest from LinkedIn</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
              )}
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 text-sm flex-grow">
                {post.content.replace(/<[^>]+>/g, "").slice(0, 120)}...
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-3 font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
