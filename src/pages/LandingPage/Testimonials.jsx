import { Stack, Title, Text, Group, Avatar, Box } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import UsersReviews from "../TutorProfile/UsersReviews";

export default function Testimonials() {
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return (
    <Stack
      sx={{ background: "#3347B0", color: "white" }}
      px={isSmall ? "md" : 120}
      py={isSmall ? 72 : 144}
    >
      <div>
        <Text weight={500}>TESTIMONIALS</Text>
        <Title mb={isSmall ? 48 : 72}>What our Students Say</Title>
      </div>
      <UsersReviews />
    </Stack>
  );
}

function UserCard({ image, name, text, occupation }) {
  return (
    <Box
      p={"md"}
      sx={{
        maxWidth: "400px",
        background: "white",
        color: "black",
        borderRadius: "5px",
        height: "200px",
      }}
    >
      <Group>
        <Avatar src={image} alt={name} radius="xl" />
        <div>
          <Text weight={600}>{name}</Text>
          <Text size="sm" color={"dimmed"}>
            {occupation}
          </Text>
        </div>
      </Group>
      <Text pl={54} pt="sm" size="sm">
        {text}
      </Text>
    </Box>
  );
}

const TESTEMONIALS = [
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "Great session dani was super helpful.she shared some practical advice on how to answer the question",
    occupation: "High school student",
    name: "Darlene Robertson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text: "Great session dani was super helpful.she shared some practical advice on how to answer the question",
    occupation: "High school student",
    name: "Jhon Doe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text: "Great session dani was super helpful.she shared some practical advice on how to answer the question",
    occupation: "High school student",
    name: "Alex Suprun",
  },
];
