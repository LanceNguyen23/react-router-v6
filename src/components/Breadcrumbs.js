import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const crumbs = location.pathname.split("/");
  let currentLink = "";

  return (
    <div className="breadcrumbs">
      {crumbs
        .filter((crumb) => crumb !== "")
        .map((crumb) => {
          currentLink += `/${crumb}`;
          return (
            <div className="crumb">
              <Link to={currentLink} key={crumb}>
                {crumb}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
