import React from "react";
import {Input} from "@nextui-org/react";

export default function SearchBar() {
  return (
    <div>
      <Input type="email" label="Search for a prof" placeholder="Enter professor's name" classNames={{base: 'w-[40rem] rounded-2xl '}} />
    </div>
  );
}
