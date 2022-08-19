import {
  Button,
  Input,
  MultiSelect,
  NumberInput,
  Paper,
  Select,
  Slider,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";

export default function Filters() {
  return (
    <Stack mt={"xl"}>
      <MultiSelect
        label="Subjects"
        placeholder="Maths, Physics, Biologie.."
        data={["PhD", "Master", "Bachelor"]}
      />
      <Select
        mt={"xl"}
        label="Location"
        placeholder="Choose a location"
        data={["tunisia", "India", "Poland", "Serbia"]}
        searchable
      />
      <Input.Wrapper label="Max radius">
        <Slider defaultValue={0} max={5000} />
      </Input.Wrapper>

      <MultiSelect
        mt={"xl"}
        label="Qualifications"
        placeholder="PhD, Master, Bachelor.."
        data={["PhD", "Master", "Bachelor"]}
      />
      <MultiSelect
        label="Curriculum"
        placeholder="Choose a curriculum"
        data={["PhD", "Master", "Bachelor"]}
      />
      <NumberInput
        label="Minimum years of experiece"
        placeholder="Choose minimum years of experiece"
        hideControls
      />
      <Button mt={"xl"} color={"indigo"} sx={{ background: "#3347B0" }}>
        Filter
      </Button>
    </Stack>
  );
}
