import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-3">
      <div className="flex justify-between">
        <Link to="/">
          <h1 className="font-light text-2xl">Cars</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
