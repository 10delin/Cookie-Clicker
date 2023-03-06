import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
