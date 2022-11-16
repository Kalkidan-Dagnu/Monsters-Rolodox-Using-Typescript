import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className?: string;
  placeholder?:string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}


const SearchBox  = ({ className, placeholder, onChangeHandler } : SearchBoxProps) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={ onChangeHandler}
  />
);

export default SearchBox;
