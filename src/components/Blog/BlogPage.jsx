import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "Technology",
    "Company News"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.",
      category: "Web Development",
      image: "https://t3.ftcdn.net/jpg/08/71/60/32/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg"
    },
    {
      title: "How AI is Transforming Digital Marketing",
      excerpt: "Discover how artificial intelligence is revolutionizing digital marketing strategies and customer engagement.",
      category: "Digital Marketing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYUBp-sS7gkr50RwnCu5hElWKdKNuk3eqbw&s"
    },
    {
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "A comprehensive comparison of native and cross-platform mobile app development approaches.",
      category: "Mobile Development",
      image: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
    },
    {
      title: "Designing for Accessibility: Best Practices",
      excerpt: "Learn how to create inclusive digital experiences that work for everyone.",
      category: "UI/UX Design",
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg"
    },
    {
      title: "Innomatrics Wins Best Tech Innovation Award 2024",
      excerpt: "We're proud to announce our recent recognition at the Annual Tech Excellence Awards.",
      category: "Company News",
      image: "https://img.freepik.com/free-vector/gradient-technology-award-illustration_52683-62314.jpg"
    },
    {
      title: "The Rise of Edge Computing in 2024",
      excerpt: "Understanding the impact of edge computing on modern application architecture.",
      category: "Technology",
      image: "https://img.freepik.com/free-vector/digital-technology-background-with-hexagonal-segments-circuit-pattern_1017-41325.jpg"
    }
  ];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] text-white"
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPxEuA0sDXYWGWZGqZo23nAWwo4Y_tJ_J0Mm0n_TYgWJZDK4vhVHMPKPATV7QKbmwDOQ&usqp=CAU')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-4xl  ml-[-400px] font-bold sm:text-5xl md:text-6xl mb-4">
              Our Latest Insights
            </h1>
            <p className="mt-4  ml-[-200px] text-xl text-blue-100">
              Stay updated with the latest trends and insights in technology and digital innovation
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              } border border-gray-200`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-2">
                  <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 text-base text-gray-500 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <Link 
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                  >
                    Read More 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-blue-900 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
          <p className="mt-2 text-blue-200">Get the latest insights delivered directly to your inbox</p>
          <form className="mt-6 flex max-w-md mx-auto gap-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
