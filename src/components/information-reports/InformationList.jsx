import { useEffect, useState } from "react";
import Information from "./Information";
import data from "../../data/posts.json"; // TEST DATA

const InformationList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data);
  }, []);

  return (
    <div className=" w-[1160px]">
      {posts.map((post, index) => {
        return (
          <Information
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

export default InformationList;
