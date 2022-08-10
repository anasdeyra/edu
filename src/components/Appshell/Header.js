import { Box, createStyles, Text, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((t) => ({
  header: {
    background: t.colors.brand[0],
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function Header() {
  const { classes } = useStyles();
  return (
    <Box px={"xl"} py="sm" className={classes.header}>
      <Text to={"/"} component={Link} weight={"600"} size={"xl"}>
        Mulang
      </Text>
      <Group spacing={64}>
        <Navlinks />
        <Group spacing={"xl"}>
          <Text size={"sm"} weight={"600"} to={"/"} component={Link}>
            Login
          </Text>
          <Button
            to={"/"}
            component={Link}
            radius={"sm"}
            variant="white"
            color={"dark"}
          >
            Register
          </Button>
        </Group>
      </Group>
    </Box>
  );
}

function Navlinks() {
  return (
    <Group spacing={40} sx={{ color: "white" }}>
      <Text size={"sm"} to={"/"} component={Link}>
        Home
      </Text>
      <Text size={"sm"} to={"/about us"} component={Link}>
        About Us
      </Text>
      <Text size={"sm"} to={"/tutor"} component={Link}>
        Become a Tutor
      </Text>
    </Group>
  );
}
