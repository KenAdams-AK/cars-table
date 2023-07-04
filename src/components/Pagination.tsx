import { NavLink, useLocation } from "react-router-dom";

interface Props {
  pages: number[];
}

export default function Pagination(props: Props) {
  const { pages } = props;
  const location = useLocation();

  if (pages.length <= 1) {
    return null;
  }

  function setURL(idx: number) {
    if (idx === 0) {
      return `/${location.search}`;
    }

    return `page/${idx + 1}${location.search}`;
  }

  return (
    <div className="Pagination">
      {pages.map((page, idx) => (
        <NavLink key={page} className="Pagination__link" to={setURL(idx)}>
          {page}
        </NavLink>
      ))}
    </div>
  );
}
