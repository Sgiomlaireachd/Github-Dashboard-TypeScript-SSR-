import React, { useState } from "react";
import { TextField } from "@material-ui/core";

type SearchBarProps = {
  searchQuery: string;
  onSubmit: (newSearchQuery: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSubmit }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState<string>(
    searchQuery || ""
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(localSearchQuery);
  };

  return (
    <div className="search">
      <form style={{ padding: "10px" }} onSubmit={submitHandler}>
        <TextField
          fullWidth
          label="Search..."
          variant="outlined"
          onChange={changeHandler}
          value={localSearchQuery}
        />
      </form>
    </div>
  );
};

export default SearchBar;
