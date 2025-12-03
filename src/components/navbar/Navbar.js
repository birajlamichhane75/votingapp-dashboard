import { toggleMenu } from "../../redux/slice/systemSlice";
import { useDispatch } from "react-redux";
import { DUMMY_PROFILE } from "../../constants/images";

export default function Navbar({ name, showBars, back }) {
  const dispatch = useDispatch();
  const handleToggleBar = (e) =>{
    dispatch(toggleMenu())
  }
  return (
    <div className="navbar">
      <div className="navbar-left">
        {back ? (
          <i
            className="fa-regular fa-chevron-left navbar-left--icon__back"
            onClick={() => back()}
          ></i>
        ) : null}
        {showBars ? (
          <i
            className={`navbar-left--icon__bar fa-light fa-bars`}
            onClick={handleToggleBar}
          ></i>
        ) : null}
        <h2 className="navbar-left--text">{name}</h2>
      </div>
      <div className="navbar-right">
        <div
          // onClick={handleLogout}
          className="navbar-right--item navbar-right--item__logout"
        >
          <i className="fa-regular fa-arrow-right-from-bracket"></i>
        </div>
        <div className="navbar-right--profile">
          <img src={DUMMY_PROFILE} alt="User profile" />
        </div>
      </div>
    </div>
  );
}
