import React, { useEffect } from 'react';
import { API_URL } from '../Home/Home';
import { Link, useParams } from 'react-router-dom';
import { IPost } from '../../utils/types';

export const Post: React.FC = () => {
  const { postId } = useParams();
  const [post, setPost] = React.useState<IPost | null>(localStorage.getItem(`post-${postId}`) ? JSON.parse(localStorage.getItem(`post-${postId}`) || '') : null);

  useEffect(() => {
    fetch(`${API_URL}/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        localStorage.setItem(`post-${postId}`, JSON.stringify(data));
      });
  }, [postId]);

  return post && (
    <>
      <h2>{post.title}</h2>
      <Link to="/" className="btn">Go back</Link>
      <p>{post.body}</p>
    </>
  );
}