const Likes = async() => {
    await new Promise((res, _) =>
    setTimeout(() => {
      res();
    }, 6000))
  return <div>2k Likes</div>;
};

export default Likes;
