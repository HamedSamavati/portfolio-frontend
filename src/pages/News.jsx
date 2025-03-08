import React, { useState, useEffect } from "react";
import { getBlogPosts } from "../services/api";
// import Loader from "../components/Loader";
import { Link } from "react-router-dom";

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getBlogPosts();
        setNews(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      {/* {loading && <Loader />} */}
      <div className="news-container">
        {news.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <p>{post.category}</p>
            <Link to={`/news/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default News;
