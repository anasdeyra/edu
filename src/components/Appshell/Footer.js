import { Box, createStyles, Text, Group } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((t) => ({
  header: {
    background: "#66FBD1",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  return (
    <Box px={"xl"} py={48} className={classes.header}>
      <Text to={"/"} component={Link} weight={"600"} size={"xl"}>
        Mulang
      </Text>
      <Group spacing={64}>
        <Navlinks />
      </Group>
    </Box>
  );
}

function Navlinks() {
  return (
    <Group spacing={40} sx={{ color: "black", fontWeight: "500" }}>
      <Text to={"/"} component={Link}>
        Home
      </Text>
      <Text to={"/about us"} component={Link}>
        About Us
      </Text>
      <Text to={"/tutor-signup"} component={Link}>
        Become a Tutor
      </Text>
    </Group>
  );
}
