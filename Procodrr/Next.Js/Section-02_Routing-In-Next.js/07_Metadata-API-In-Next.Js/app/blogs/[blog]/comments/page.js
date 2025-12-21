const comments = async ({ params }) => {
  const paramsObj = await params;

  const { blog } = paramsObj;
  console.log(paramsObj);
  return (
    <>
      <h1>
        All Comments on <b>{blog.split("%").join(" ")}</b>
      </h1>
    </>
  );
};

export default comments;
