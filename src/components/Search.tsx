import { ChangeEvent, ComponentProps, useCallback, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

import { useCarsContext } from "../hooks/useCarsContext";
import { useDebounce } from "../hooks/useDebounce";

import Button from "../layout/Button";

type Props = ComponentProps<"input">;

export default function Search(props: Props) {
  const { ...rest } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { search, searchReset, searchResult } = useCarsContext();
  const [searchParams, setSearchParams] = useSearchParams({ query: "" });
  const query = searchParams.get("query") ?? "";

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchParams({ query: value.trim() });
  }

  const debouncedSearch = useDebounce(() => search(query), 1000);

  const handleSearchReset = useCallback(() => {
    searchParams.delete("query");
    setSearchParams(searchParams);
    searchReset();
  }, []);

  useEffect(() => {
    if (query) {
      debouncedSearch();
    }
  }, [query]);

  useEffect(() => {
    if (searchResult.length) {
      navigate(`/${location.search}`);
    }
  }, [searchResult]);

  return (
    <div className="Search">
      <label className="Search__label" htmlFor="search">
        Search query:
        <input
          className="Search__input"
          type="search"
          id="search"
          value={query}
          onChange={handleChange}
          maxLength={17}
          {...rest}
        />
      </label>
      <Button
        className="Search__reset"
        content="Reset"
        onClick={handleSearchReset}
        disabled={!query}
      />
    </div>
  );
}
