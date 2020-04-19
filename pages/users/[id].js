import Link from "next/link";

const User = ({ router }) => {
  const { query } = router;

  return (
    <div className="container">
      <Link href="/">
        <a>Go Back!</a>
      </Link>
      <br />
      <div>User {query.id}</div>
    </div>
  );
};

export default User;
