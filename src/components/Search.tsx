import { ChangeEvent, ComponentProps, useCallback, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";

import { useCarsContext } from "../hooks/useCarsContext";

type Props = ComponentProps<"input">;

export default function Search(props: Props) {
  const { ...rest } = props;
  const { search, searchReset } = useCarsContext();
  const [searchParams, setSearchParams] = useSearchParams({ query: "" });
  const query = searchParams.get("query") ?? "";

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchParams({ query: value.trim() });
  }, []);

  const debouncedSearch = useMemo(
    () =>
      debounce(() => {
        search(query);
      }, 800),
    [query],
  );

  const handleSearchReset = useCallback(() => {
    searchParams.delete("query");
    setSearchParams(searchParams);
    searchReset();
  }, []);

  useEffect(() => {
    if (!query) {
      handleSearchReset();
      return;
    }

    debouncedSearch();
  }, [query]);

  return (
    <label className="Search" htmlFor="search">
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
  );
}
