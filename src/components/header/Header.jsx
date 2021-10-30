import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6">
              <Link to="/">
                <div className="logo">Movie App</div>
              </Link>
            </div>
            <div className="col-6 col-md-6">
              <div className="user-image">
                <img src="img/hacker.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
