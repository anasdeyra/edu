import { Box, createStyles, Text, Button, Group } from "@mantine/core";

const useStyles = createStyles((t) => ({
  header: {
    background: "#0DE3D6",
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
      <Text href="/" component="a" weight={"600"} size={"xl"}>
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
      <Text href="#" component="a">
        Home
      </Text>
      <Text href="#" component="a">
        About Us
      </Text>
      <Text href="#" component="a">
        Become a Tutor
      </Text>
    </Group>
  );
}
