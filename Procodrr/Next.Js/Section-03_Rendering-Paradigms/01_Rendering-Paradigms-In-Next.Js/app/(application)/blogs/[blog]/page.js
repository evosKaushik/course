import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blog } = await params;
  return {
    title: `Blog ${blog}`,
  };
}

const Blogs1 = async ({ params }) => {
  const { blog } = await params;
  if (!/^\d+$/.test(blog)) {
    notFound();
  }
  return (
    <>
      <h1>Blogs {blog.split("%").join(" ")}</h1>
    </>
  );
};

export default Blogs1;
