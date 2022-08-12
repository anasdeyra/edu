import {
  Box,
  createStyles,
  Text,
  Button,
  Group,
  Burger,
  Drawer,
  NavLink,
} from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((t) => ({
  header: {
    background: t.colors.brand[0],
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${t.spacing.sm}px ${t.spacing.xl}px`,
    [t.fn.smallerThan("sm")]: {
      padding: `${t.spacing.sm}px ${t.spacing.sm}px`,
    },
  },
  navlinks: {
    [t.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  burger: {
    [t.fn.largerThan("sm")]: {
      display: "none",
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
}));

export default function Header() {
  const { classes } = useStyles();
  const [isOpened, setOpened] = useState();
  const isSmall = useMediaQuery("(max-width: 1000px)");

  return (
    <Box className={classes.header}>
      <Text to={"/"} component={Link} weight={"600"} className={classes.logo}>
        My Tutor
      </Text>
      <Group spacing={64}>
        <Navlinks className={classes.navlinks} />
        <Group spacing={isSmall ? "sm" : "xl"}>
          <Text
            size={isSmall ? "xs" : "sm"}
            weight={"600"}
            to={"/login"}
            component={Link}
          >
            Login
          </Text>
          <Button
            to={"/signup"}
            component={Link}
            radius={"sm"}
            variant="white"
            color={"dark"}
            size={isSmall ? "xs" : "sm"}
          >
            Register
          </Button>
        </Group>
      </Group>
      <Burger
        size={"sm"}
        title="links"
        onClick={() => setOpened((o) => !o)}
        opened={isOpened}
        color="white"
        className={classes.burger}
      />
      <Drawer
        opened={isOpened}
        onClose={() => setOpened(false)}
        title="Navigation links"
        padding={"md"}
        position="right"
      >
        {LINKS.map(({ label, link }, i) => (
          <NavLink
            onClick={() => {
              setOpened(false);
            }}
            label={label}
            component={Link}
            to={link}
          />
        ))}
      </Drawer>
    </Box>
  );
}

function Navlinks({ className, dir }) {
  return (
    <Group className={className} spacing={40} sx={{ color: "white" }}>
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
