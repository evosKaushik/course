import Link from "next/link";

const ServicesPage = () => {
  return (
    <>
      <h1>All Services</h1>
      <Link href="/">Home</Link>
      <hr />
      <p>
        <Link href="/services/web-dev">Web Development</Link>
      </p>
      <p>
        <Link href="/">App Development</Link>
      </p>
      <p>
        <Link href="/">App/Web Design</Link>
      </p>
      <p>
        <Link href="/services/seo">SEO</Link>
      </p>
    </>
  );
};

export default ServicesPage;
