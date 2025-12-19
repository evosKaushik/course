import Link from "next/link";

const Home = async () => {
  return (
    <>
      <h1>Technical Agency</h1>
      <hr />
      <p>
        <Link href="/blogs">Blogs</Link>
      </p>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/services">Services</Link>
      </p>
    </>
  );
};
export default Home;
