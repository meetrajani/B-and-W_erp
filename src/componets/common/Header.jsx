import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between" style={{ zIndex: 999 }}>
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="form-inline">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Sign out
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
