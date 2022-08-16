import { Box, createStyles, Grid, Paper, Stack, Text } from "@mantine/core";
import { useState } from "react";
import SearchBox from "./SearchBox";
import TutorCard from "./TutorCard";
import { useMediaQuery } from "@mantine/hooks";
import Filters from "./Filters";

const useStyles = createStyles((t) => ({}));

export default function SearchPage() {
  //filters
  const [location, setLocation] = useState(null);
  const [experience, setExperience] = useState(null);
  const [qualifications, setQualifications] = useState([]);
  const [distance, setDistance] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [filteredList, setFilteredList] = useState(TUTORS);

  //styling
  const { classes } = useStyles();
  const isSmall = useMediaQuery("(max-width: 1000px)");

  //components

  const FILTER_BAR = !isSmall && (
    <Grid.Col span={1}>
      <Paper sx={{ height: "100%" }} shadow={"xs"} radius="sm" p={"md"}>
        <Text weight={"bold"}>Filters</Text>
        <Filters />
      </Paper>
    </Grid.Col>
  );

  const TUTORS_LIST = (
    <Grid.Col span={isSmall ? 4 : 3}>
      <Stack>
        <SearchBox />
        <Stack>
          {filteredList.map((props, i) => (
            <TutorCard key={i} {...props} />
          ))}
        </Stack>
      </Stack>
    </Grid.Col>
  );

  return (
    <Box py={"xl"} px={isSmall ? "md" : "xl"}>
      <Grid columns={4}>
        {FILTER_BAR}
        {TUTORS_LIST}
      </Grid>
    </Box>
  );
}

//fake data
const TUTORS = [
  {
    name: "Anas Deyra",
    picture:
      "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Tunis, Tunisia",
    experience: 5,
    qualifications: ["PhD", "Masters", "Bachelor"],
    distance: 100,
    subjects: ["Maths", "Physics", "Biologie", "Algebra"],
  },
  {
    name: "Fayza Duhi",
    picture:
      "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "Beirut, Lebanon",
    experience: 2,
    qualifications: ["PhD"],
    distance: 1000,
    subjects: ["Arts"],
  },
  {
    name: "Lana Rock",
    picture:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "United Kingdom",
    experience: 4,
    qualifications: ["PhD", "Masters", "Bachelor"],
    distance: 650,
    subjects: ["English", "Danish"],
  },
  {
    name: "",
    picture: "",
    location: "India",
    experience: 5,
    qualifications: ["PhD", "Masters", "Bachelor"],
    distance: 100,
    subjects: ["Maths", "Physics", "Biologie", "Algebra"],
  },
  {
    name: "",
    picture: "",
    location: "India",
    experience: 5,
    qualifications: ["PhD", "Masters", "Bachelor"],
    distance: 100,
    subjects: ["Maths", "Physics", "Biologie", "Algebra"],
  },
];
