import "./NavBarResponsive.css";
import LogoEmaus from "../assets/emaus-connect.png";

export default function NavBarResponsive() {
  return (
    <header className="navbar-off">
      <img src={LogoEmaus} alt="" className="figcaption" />
    </header>
  );
}
