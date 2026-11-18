import { SearchInputProps } from '../input.types'
import TextInput from './TextInput'
import { Search } from "lucide-react";

export default function SearchInput(props: SearchInputProps) {
  return (
    <TextInput
        {...props}
        type='search'
        placeholder={props.placeholder ?? "Search..."}
        icon= {<Search size={18} />}
    />
  )
}
