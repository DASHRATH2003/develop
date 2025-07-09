import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.",
      image: "https://t3.ftcdn.net/jpg/08/71/60/32/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg"
    },
    {
      title: "How AI is Transforming Digital Marketing",
      excerpt: "Discover how artificial intelligence is revolutionizing digital marketing strategies and customer engagement.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYUBp-sS7gkr50RwnCu5hElWKdKNuk3eqbw&s"
    },
    {
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "A comprehensive comparison of native and cross-platform mobile app development approaches.",
      image: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest <span className="text-blue-600">Insights</span>
          </h2>
        </div>
  
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="flex flex-col items-start group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              </div>
  
              <div className="max-w-xl mt-4 px-2">
                <div className="group relative">
                  <h3 className="text-xl font-semibold leading-7 text-gray-900 group-hover:text-blue-600 transition-colors">
                    <Link to="#">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-base leading-7 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
