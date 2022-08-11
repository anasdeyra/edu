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
    <Stack spacing={"xl"} py={72} px={"xl"}>
      <Stack spacing={0}>
        <Text weight={500}>WHY CHOOSE US</Text>
        <Title>Why learn with Mulang.</Title>
      </Stack>
      <SimpleGrid mt={"md"} spacing={"xl"} cols={2}>
        {FEATURES.map((f, i) => (
          <Feature {...f} key={i} />
        ))}
      </SimpleGrid>
      <Box
        mt={72}
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
            background: "#3347B0",
            zIndex: "1",
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
      <ThemeIcon color={"#3347B0"} radius={"50%"} size={48}>
        <Icon size={24} />
      </ThemeIcon>
      <Stack spacing={0}>
        <Text size={26} weight={600}>
          {title}
        </Text>
        <Text weight={500}>{text}</Text>
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
