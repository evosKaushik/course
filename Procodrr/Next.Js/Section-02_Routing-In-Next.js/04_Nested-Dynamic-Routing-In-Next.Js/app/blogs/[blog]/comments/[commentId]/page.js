const Comments = async ({ params }) => {
  const paramsObj = await params;
  const { blog, commentId } = paramsObj;
  console.log(paramsObj);
  return (
    <div>
      Comments {commentId} on {blog.split("%").join(" ")}
    </div>
  );
};

export default Comments;
