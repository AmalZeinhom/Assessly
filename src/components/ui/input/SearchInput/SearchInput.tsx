import { SearchInputProps } from '../input.types'
import TextInput from "../components/TextInput";
import { Search } from "lucide-react";

export default function SearchInput(props: SearchInputProps) {
  return (
    <TextInput
        {...props}
        type='search'
        placeholder={props.placeholder ?? "Search..."}
        endIcon={ <Search size={18} /> }
    />
  )
}
