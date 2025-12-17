const Blogs1 = async ({ params }) => {
  const { blog } = await params;
  return (
    <>
      <h1>Blogs {blog}</h1>
    </>
  );
};

export default Blogs1;
