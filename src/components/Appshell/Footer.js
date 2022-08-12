import { Box, createStyles, Text, Group } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((t) => ({
  header: {
    background: "#66FBD1",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `48px ${t.spacing.xl}px`,
    [t.fn.smallerThan("sm")]: {
      padding: `48px ${t.spacing.sm}px`,
    },
  },
  logo: {
    [t.fn.smallerThan("sm")]: {
      fontSize: t.fontSizes.md,
    },
    [t.fn.largerThan("sm")]: {
      fontSize: t.fontSizes.xl,
    },
  },
  navlink: {
    [t.fn.smallerThan("sm")]: {
      fontSize: t.fontSizes.md,
    },
    [t.fn.largerThan("sm")]: {
      fontSize: t.fontSizes.xl,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  return (
    <Box className={classes.header}>
      <Text
        className={classes.logo}
        to={"/"}
        component={Link}
        weight={"600"}
        size={"xl"}
      >
        My Tutor
      </Text>
      <Group spacing={64}>
        <Navlinks />
      </Group>
    </Box>
  );
}
function Navlinks({ className }) {
  return (
    <Group className={className} spacing={"xl"}>
      {LINKS.map(({ link, label }, i) => (
        <Text key={i} size={"sm"} to={link} component={Link}>
          {label}
        </Text>
      ))}
    </Group>
  );
}
const LINKS = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about-us" },
  { label: "Become a Tutor", link: "/tutor-signup" },
];
