import { TextInput } from "@mantine/core";
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
  return (
    <TextInput
      variant="filled"
      icon={<FaSearch />}
      placeholder="Search a tutor"
    />
  );
}
