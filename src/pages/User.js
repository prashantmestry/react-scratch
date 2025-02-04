import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      setUser(response.data);
    };
    fetchData();
  }, []);

  if (!user) {
    return 'Loading...';
  }

  return <div>{user.title}</div>;
};

export default User;
