import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import "./Logo.css";

export default function Logo() {
  return (
    <h1 className="text">
      <Link to="/" className="link">
        STEN <img src={logo} alt="stengoogle" className="logo" />
        GOOGLE
      </Link>
    </h1>
  );
}
