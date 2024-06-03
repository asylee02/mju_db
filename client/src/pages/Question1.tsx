import { Link } from "react-router-dom";

const Question1 = () => {
  return (
    <div>
      <Link to={"./a"}>A번</Link>
      <Link to={"./b"}>B번</Link>
      <Link to={"./c"}>C번</Link>
      <Link to={"./d"}>D번</Link>
      <Link to={"./e"}>E번</Link>
      <Link to={"./f"}>F번</Link>
    </div>
  );
};

export default Question1;
