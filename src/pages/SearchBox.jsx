import {
  Autocomplete,
  Group,
  Divider,
  Select,
  Button,
  Text,
} from "@mantine/core";
import { forwardRef } from "react";
import {
  FaBook,
  FaMapMarkerAlt,
  FaLocationArrow as FaRadiation,
  FaVideo as FaCamera,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SearchBox() {
  return (
    <Group
      p={"xs"}
      sx={{
        background: "white",
        alignSelf: "start",
        borderRadius: "5px",
        zIndex: 1,
      }}
      mt={48}
    >
      <Group>
        <Autocomplete
          p={0}
          variant="unstyled"
          radius={0}
          icon={<FaBook size={24} />}
          placeholder="Subject"
          dropdownPosition="bottom"
          data={["Maths", "Physics", "Biologie", "Chimestry", "Art"]}
          size="md"
        ></Autocomplete>
        <Divider orientation="vertical" />
        <Select
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": {
                  background: "white",
                  color: "#222",
                },
              },
            },
          }}
          p={0}
          variant="unstyled"
          radius={0}
          icon={<FaMapMarkerAlt size={24} />}
          placeholder="Cours location"
          dropdownPosition="bottom"
          itemComponent={ItemComponent}
          data={[
            { value: 1, label: "Online", Icon: FaCamera },
            { value: 2, label: "Near me", Icon: FaRadiation },
          ]}
          size="md"
        ></Select>
      </Group>
      <Button
        to={"/"}
        component={Link}
        radius={"sm"}
        color="indigo"
        sx={{ background: "#3347B0", alignSelf: "start" }}
        size="xl"
      >
        Find tutor
      </Button>
    </Group>
  );
}

const ItemComponent = forwardRef(({ Icon, label, ...other }, ref) => (
  <Group {...other} noWrap ref={ref}>
    <Icon color={"#222"} size={24} />
    <Text>{label}</Text>
  </Group>
));
