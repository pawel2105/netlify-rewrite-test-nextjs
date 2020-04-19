import Link from "next/link";

const About = () => {
  return (
    <div className="container">
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <br />
      <div>About page</div>
    </div>
  );
};

export default About;
