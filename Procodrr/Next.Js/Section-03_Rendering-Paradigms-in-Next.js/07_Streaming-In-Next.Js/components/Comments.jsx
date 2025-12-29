const Comments = async () => {
    await new Promise((res, _) =>
    setTimeout(() => {
      res();
    }, 9000))
  return <div>500 Comments</div>;
};

export default Comments;
