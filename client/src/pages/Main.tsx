import { Link } from "react-router-dom";

const main = () => {
  return (
    <div>
      <Link to={"/question1"}>문제 1번</Link>
      {/* <Link>문제 2번</Link> */}
    </div>
  );
};

export default main;
