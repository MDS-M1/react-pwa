import React, { useEffect } from 'react';
import { IPost } from '../../utils/types';
import { Link } from 'react-router-dom';

import './Home.scss';

export const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const Home: React.FC = () => {
  const [posts, setPosts] = React.useState<IPost[] | null>(localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts') || '') : null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        localStorage.setItem('posts', JSON.stringify(data));
      });
  }, []);

  return (
    <>
      <h2>Articles du moment</h2>
      {posts ? (
        <ul className="posts">
          {posts.length > 0 ? posts.map((post: IPost) => (
            <li key={post.id} className="posts--item">
              <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>{post.body}</p>
              <Link to={`/post/${post.id}`} className="btn posts--item--read-more">Read this article</Link>
            </li>
          )) : (<div>Not content</div>)}
        </ul>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
}