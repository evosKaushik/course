import Link from "next/link";
export const metadata = {
  title: "About",
};
const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>;
      <Link href="/">Home</Link>
    </>
  );
};

export default AboutPage;
