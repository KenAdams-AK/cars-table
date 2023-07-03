import { Dispatch } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  pages: number[];
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
}

export default function Pagination(props: Props) {
  const { pages, setCurrentPage } = props;

  return (
    <div className="Pagination">
      {pages.map((page, idx) => (
        <NavLink
          key={page}
          className="Pagination__link"
          to={idx === 0 ? "/" : `page/${page}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </NavLink>
      ))}
    </div>
  );
}
