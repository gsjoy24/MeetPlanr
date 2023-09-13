"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import LoadingSpinner from '@/shareComponents/LoadingSpinner';

const DetailsPage = ({ params }) => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState(''); 
  const [comments, setComments] = useState([]); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(`/api/blog/${params.id}`);
        if (response.data) {
          setBlog(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [params]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = async () => {
    try {

      const response = await axios.post(`/api/blog/${params.id}`, {
        comment: comment,
      });


      if (response.data) {
        setComments([...comments, response.data]);
        setComment(''); 
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  console.log(params);
  console.log(blog);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen py-6">
      <div className="max-w-2xl p-6 mx-auto">
        <h2 className="mb-4 text-2xl font-semibold">{blog?.title}</h2>
        <Image
          src={blog?.image}
          alt={blog?.title}
          className="w-full mb-4 rounded-md"
          width={1000}
          height={400}
        />
        <p className="text-gray-600">{blog?.subtitle}</p>
        <p className="mt-2 text-gray-800">{blog?.content}</p>

        
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={handleCommentChange}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handlePostComment}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Post Comment
          </button>
        </div>

        
        <div className="mt-6">
          
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="mt-2">
                {comment.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
