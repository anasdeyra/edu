import {
  Stack,
  Text,
  Title,
  Group,
  ThemeIcon,
  SimpleGrid,
  Box,
  Button,
  Overlay,
} from "@mantine/core";
import { FaAward, FaDollarSign, FaHeadset, FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

export default function Features() {
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return (
    <Stack
      sx={{ background: "#66FBD1" }}
      spacing={"xl"}
      py={isSmall ? 72 : 144}
    >
      <Stack px={isSmall ? "md" : 120} spacing={0}>
        <Text weight={500}>WHY CHOOSE US</Text>
        <Title>Why learn with tutors street.</Title>
      </Stack>
      <SimpleGrid
        px={isSmall ? "md" : 120}
        mt={48}
        spacing={isSmall ? 32 : 64}
        cols={isSmall ? 1 : 2}
      >
        {FEATURES.map((f, i) => (
          <Feature {...f} key={i} />
        ))}
      </SimpleGrid>
      <Box
        mt={isSmall ? 72 : 144}
        py={isSmall ? 72 : 144}
        px={isSmall ? "md" : 120}
        sx={{
          background: `url(${process.env.PUBLIC_URL}/images/fb.jpg)`,
          backgroundPosition: `0 ${isSmall ? "0" : "-200px"}`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          position: "relative",
        }}
      >
        <Overlay opacity={0} zIndex={0} blur={3} />
        <Stack align={"start"} sx={{ zIndex: 1, color: "white" }}>
          <Title>Hire a tutor now</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            assumenda quod laboriosam tempora eum ullam et ad deleniti iste.
            Aliquam nemo voluptatem illo omnis blanditiis, quidem facere
            praesentium esse aspernatur.
          </Text>
          <Button
            mt={"xl"}
            to={"/signup"}
            component={Link}
            radius={"sm"}
            color="indigo"
            sx={{
              background: "#3347B0",
              zIndex: "1",
              "&:hover": {
                background: "#3347B0",
              },
              color: "white",
            }}
            size={isSmall ? "lg" : "xl"}
            m={0}
          >
            Hire a tutor
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

function Feature({ Icon, title, text }) {
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return (
    <Group align={"start"} noWrap>
      <ThemeIcon
        sx={{ color: "#66FBD1" }}
        color={"#3347B0"}
        radius={"50%"}
        size={isSmall ? 48 : 64}
      >
        <Icon size={isSmall ? 24 : 32} />
      </ThemeIcon>
      <Stack spacing={0}>
        <Text size={isSmall ? 22 : 26} weight={500}>
          {title}
        </Text>
        <Text>{text}</Text>
      </Stack>
    </Group>
  );
}

const FEATURES = [
  {
    title: "Certified tutors",
    text: "Sed ut perspiciateis unde omnis iste natus error sit",
    Icon: FaAward,
  },
  {
    title: "Affordable price",
    text: "Sed ut perspiciateis unde omnis iste natus error sit",
    Icon: FaDollarSign,
  },
  {
    title: "Personalized Learning",
    text: "Sed ut perspiciateis unde omnis iste natus error sit",
    Icon: FaLayerGroup,
  },
  {
    title: "Personalized Support",
    text: "Sed ut perspiciateis unde omnis iste natus error sit",
    Icon: FaHeadset,
  },
];
