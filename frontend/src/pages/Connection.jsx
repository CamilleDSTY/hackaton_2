import LogIn from "../components/LogIn";
import Logo from "../assets/Logo.png";

function Connection() {
  return (
    <section className="block">
      <img className="logo2" src={Logo} alt="" />
      {/* <div className="test"> */}
      <LogIn />
      {/* </div> */}
    </section>
  );
}

export default Connection;
