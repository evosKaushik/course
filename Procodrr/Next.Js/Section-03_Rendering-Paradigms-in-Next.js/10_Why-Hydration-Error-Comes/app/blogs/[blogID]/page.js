import Link from "next/link";

export const dynamicParams = false;

// ISR
export const revalidate = 5;

// SSG
// export async function generateStaticParams() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   return data.map(({ id }) => ({ blogID: id.toString() }));
// }

const Blogs = async ({ params }) => {
  const { blogID } = await params;
  console.log("BlogID: ",blogID);
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <h2>Date: {new Date().toLocaleString()}</h2>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blogs;
