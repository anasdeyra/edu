import {
  Stack,
  Text,
  Title,
  Group,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";
import {
  FaAward,
  FaDollarSign,
  FaHeadset,
  FaPuzzlePiece,
} from "react-icons/fa";

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
        <Title order={2}>{title}</Title>
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
    title: "Personalized Support",
    text: "Sed ut perspiciateis unde omnis iste natus error sit",
    Icon: FaHeadset,
  },
  {
    title: "Personalized Support",
    text: "Sed ut perspiciateis unde omnis iste natus error sit",
    Icon: FaPuzzlePiece,
  },
];
