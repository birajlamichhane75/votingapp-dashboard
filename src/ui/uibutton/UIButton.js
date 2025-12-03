import { Link } from "react-router-dom";

export default function UIButton({
  href,
  id,
  label,
  onClick,
  style,
  type,
  className,
  target,
}) {
  return href ? (
    <Link
      id={id}
      href={href}
      className={`btn btn-${type ? type : "link"}`}
      style={style}
      target={target}
    >
      {label}
    </Link>
  ) : (
    <button
      id={id}
      className={`btn btn-${type ? type : "plain"} ${
        className ? className : ""
      }`}
      style={style}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
