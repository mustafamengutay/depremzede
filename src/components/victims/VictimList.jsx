import { useEffect, useState } from 'react';
import VictimItem from './VictimItem';
import data from '../../data/posts.json'; // TEST DATA

const VictimList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data);
  }, []);

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <VictimItem
            key={index}
            name={post.name}
            address={post.address}
            city={post.city}
            email={post.email}
            phoneNo={post.phoneNo}
            status={post.status}
          />
        );
      })}
    </div>
  );
};

export default VictimList;
