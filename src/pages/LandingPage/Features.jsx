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

export default function Features() {
  return (
    <Stack sx={{ background: "#66FBD1" }} spacing={"xl"} py={144} px={"xl"}>
      <Stack spacing={0}>
        <Text weight={500}>WHY CHOOSE US</Text>
        <Title>Why learn with Mulang.</Title>
      </Stack>
      <SimpleGrid mt={48} spacing={"64px"} cols={2}>
        {FEATURES.map((f, i) => (
          <Feature {...f} key={i} />
        ))}
      </SimpleGrid>
      <Box
        mt={128}
        p={"xl"}
        sx={{
          background: `url(${process.env.PUBLIC_URL}/fb.jpg)`,
          backgroundPosition: "0 -300px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          height: "300px",
          borderRadius: "5px",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Overlay opacity={0} zIndex={0} blur={3} />
        <Button
          to={"/signup"}
          component={Link}
          radius={"sm"}
          color="indigo"
          sx={{
            background: "#66FBD1",
            zIndex: "1",
            "&:hover": {
              background: "#60F5C5",
            },
            color: "black",
          }}
          size="xl"
          m={0}
        >
          Get your tutor
        </Button>
      </Box>
    </Stack>
  );
}

function Feature({ Icon, title, text }) {
  return (
    <Group>
      <ThemeIcon
        sx={{ color: "#66FBD1" }}
        color={"#000"}
        radius={"50%"}
        size={64}
      >
        <Icon size={32} />
      </ThemeIcon>
      <Stack spacing={0}>
        <Text size={26} weight={500}>
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
