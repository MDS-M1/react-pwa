import React, { useEffect } from 'react';
import { API_URL } from '../Home/Home';
import { useParams } from 'react-router-dom';
import { IPost } from '../../utils/types';

export const Post: React.FC = () => {
  const [post, setPost] = React.useState<IPost | null>(localStorage.getItem('post') ? JSON.parse(localStorage.getItem('post') || '') : null);
  const { postId } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        localStorage.setItem('post', JSON.stringify(data));
      });
  }, [postId]);

  return post && (
    <>
      <p>Post</p>
      <p>{post.title}</p>
    </>
  );
}