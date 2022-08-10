import { Box, createStyles, Text, Button, Group } from "@mantine/core";

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
      <Text href="/" component="a" weight={"600"} size={"xl"}>
        Mulang
      </Text>
      <Group spacing={64}>
        <Navlinks />
        <Group spacing={"xl"}>
          <Text size={"sm"} weight={"600"} href="#" component="a">
            Login
          </Text>
          <Button
            href="#"
            component="a"
            radius={0}
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
      <Text size={"sm"} href="#" component="a">
        Home
      </Text>
      <Text size={"sm"} href="#" component="a">
        About Us
      </Text>
      <Text size={"sm"} href="#" component="a">
        Become a Tutor
      </Text>
    </Group>
  );
}
