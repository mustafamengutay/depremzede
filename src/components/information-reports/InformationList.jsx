import Information from './Information';

const InformationList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <Information
            key={index}
            name={post.name}
            address={post.address}
            city={post.city}
            email={post.email}
            phoneNo={post.phoneNumber}
            status={post.ilanDurumu}
          />
        );
      })}
    </div>
  );
};

export default InformationList;
