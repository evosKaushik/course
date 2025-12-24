import Link from "next/link";

const ServicesPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
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
    </div>
  );
};

export default ServicesPage;
