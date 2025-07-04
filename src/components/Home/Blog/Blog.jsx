import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.",
      date: "March 15, 2024",
      category: "Technology",
      readTime: "5 min read",
    },
    {
      title: "How AI is Transforming Digital Marketing",
      excerpt:
        "Discover how artificial intelligence is revolutionizing digital marketing strategies and customer engagement.",
      date: "March 10, 2024",
      category: "Digital Marketing",
      readTime: "4 min read",
    },
    {
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt:
        "A comprehensive comparison of native and cross-platform mobile app development approaches.",
      date: "March 5, 2024",
      category: "Mobile Development",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Latest <span className="text-blue-600">Insights</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest trends, insights, and news from the tech world.
        </p>
      </div>
  
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {[
          {
            title: "Web Development Trends 2023",
            date: "Mar 15, 2023",
            category: "Development",
            readTime: "5 min read",
            excerpt: "Discover the top web development technologies that will dominate this year and beyond.",
            link: "#",
            author: "Sarah Johnson",
            authorRole: "Senior Developer",
            image: "https://t3.ftcdn.net/jpg/08/71/60/32/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg"
          },
          {
            title: "AI in Modern Applications",
            date: "Apr 2, 2023",
            category: "Artificial Intelligence",
            readTime: "7 min read",
            excerpt: "How artificial intelligence is transforming business applications and user experiences.",
            link: "#",
            author: "Michael Chen",
            authorRole: "AI Specialist",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYUBp-sS7gkr50RwnCu5hElWKdKNuk3eqbw&s"
          },
          {
            title: "Mobile App Development Guide",
            date: "Apr 18, 2023",
            category: "Mobile",
            readTime: "6 min read",
            excerpt: "Comprehensive guide to building performant mobile applications in 2023.",
            link: "#",
            author: "David Wilson",
            authorRole: "Mobile Engineer",
            image: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
          }
        ].map((post, index) => (
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
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-600/10">
                  {post.category}
                </span>
              </div>
            </div>
  
            <div className="max-w-xl mt-6 px-2">
              <div className="flex items-center gap-x-4 text-sm">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{post.readTime}</span>
              </div>
              
              <div className="group relative">
                <h3 className="mt-3 text-xl font-semibold leading-7 text-gray-900 group-hover:text-blue-600 transition-colors">
                  <Link to={post.link}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 line-clamp-3 text-base leading-7 text-gray-600">
                  {post.excerpt}
                </p>
              </div>
  
              <div className="mt-6 flex items-center">
                <img 
                  src={`https://source.unsplash.com/random/100x100/?portrait,${index}`}
                  alt={post.author}
                  className="h-10 w-10 rounded-full object-cover mr-3"
                  loading="lazy"
                />
                <div className="text-sm leading-6">
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-gray-600">{post.authorRole}</p>
                </div>
              </div>
  
              <div className="mt-6">
                <Link 
                  to={post.link} 
                  className="text-sm font-semibold text-blue-600 hover:text-blue-500 flex items-center transition-colors"
                >
                  Read more <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
  
      <div className="mt-16 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
        >
          View All Articles
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Blog;
