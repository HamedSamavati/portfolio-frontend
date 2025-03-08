import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogPostById } from "../services/api";
// import Loader from "../components/Loader";

function NewsPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getBlogPostById(id);
        setNews(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [id]);

  return (
    <>
      {/* {loading && <Loader />} */}
      {news && (
        <div className="news-page">
          <img src={news.image_url} alt={news.title} />
          <h1>{news.title}</h1>
          <p>{news.content}</p>
        </div>
      )}
    </>
  );
}

export default NewsPage;
