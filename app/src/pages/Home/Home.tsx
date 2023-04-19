import React, { useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const Home: React.FC = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      });
  }, []);

  return (
    <p>Home</p>
  );
}