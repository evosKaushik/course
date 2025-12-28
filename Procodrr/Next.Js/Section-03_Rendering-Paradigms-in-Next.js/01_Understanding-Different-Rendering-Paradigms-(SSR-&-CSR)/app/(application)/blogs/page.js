import Link from "next/link";
export const metadata = {
  title: "Blogs",
};
const BlogsPage = () => {
  return (
    <>
      <h1>All Blogs</h1>
      <hr />
      {Array.from({ length: 20 }).map((el, index) => (
        <h2 key={index}>
          <Link href={`/blogs/${index}`}>Blog {index}</Link>
        </h2>
      ))}
    </>
  );
};

export default BlogsPage;
