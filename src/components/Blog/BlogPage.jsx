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
      date: "March 15, 2024",
      category: "Web Development",
      readTime: "5 min read",
      author: "Sarah Johnson",
      authorRole: "Senior Developer",
      image: "https://t3.ftcdn.net/jpg/08/71/60/32/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg"
    },
    {
      title: "How AI is Transforming Digital Marketing",
      excerpt: "Discover how artificial intelligence is revolutionizing digital marketing strategies and customer engagement.",
      date: "March 10, 2024",
      category: "Digital Marketing",
      readTime: "4 min read",
      author: "Michael Chen",
      authorRole: "Marketing Specialist",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYUBp-sS7gkr50RwnCu5hElWKdKNuk3eqbw&s"
    },
    {
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "A comprehensive comparison of native and cross-platform mobile app development approaches.",
      date: "March 5, 2024",
      category: "Mobile Development",
      readTime: "6 min read",
      author: "David Wilson",
      authorRole: "Mobile Lead",
      image: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
    },
    {
      title: "Designing for Accessibility: Best Practices",
      excerpt: "Learn how to create inclusive digital experiences that work for everyone.",
      date: "March 1, 2024",
      category: "UI/UX Design",
      readTime: "7 min read",
      author: "Emma Thompson",
      authorRole: "UX Designer",
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg"
    },
    {
      title: "Innomatrics Wins Best Tech Innovation Award 2024",
      excerpt: "We're proud to announce our recent recognition at the Annual Tech Excellence Awards.",
      date: "February 28, 2024",
      category: "Company News",
      readTime: "3 min read",
      author: "PR Team",
      authorRole: "Communications",
      image: "https://img.freepik.com/free-vector/gradient-technology-award-illustration_52683-62314.jpg"
    },
    {
      title: "The Rise of Edge Computing in 2024",
      excerpt: "Understanding the impact of edge computing on modern application architecture.",
      date: "February 25, 2024",
      category: "Technology",
      readTime: "8 min read",
      author: "Alex Rivera",
      authorRole: "Cloud Architect",
      image: "https://img.freepik.com/free-vector/digital-technology-background-with-hexagonal-segments-circuit-pattern_1017-41325.jpg"
    }
  ];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Our Latest Insights
            </h1>
            <p className="mt-4 text-xl text-blue-200">
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
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 text-base text-gray-500 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    */}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.authorRole}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-500 font-medium flex items-center"
                  >
                    Read full article
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
              className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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