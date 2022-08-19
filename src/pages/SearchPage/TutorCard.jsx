import {
  Avatar,
  Group,
  Paper,
  Stack,
  Text,
  createStyles,
  Badge,
  Button,
} from "@mantine/core";

import { FaBusinessTime, FaMapMarkerAlt } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import BookingModal from "../TutorProfile/BookingModal";

const useStyles = createStyles((t) => ({
  infoGroup: {
    color: t.colors.gray[6],
  },
}));

export default function TutorCard({
  name,
  picture,
  location,
  subjects = [],
  experience,
}) {
  const { classes } = useStyles();
  const [opened, { close, open }] = useDisclosure();
  return (
    <Paper shadow={"xs"} radius="sm" p={"md"}>
      <BookingModal close={close} opened={opened} />
      <Group position="apart">
        <Group>
          <Avatar radius={"50%"} size="xl" src={picture} />
          <Stack spacing={0}>
            <Text size={"xl"} weight={"bold"}>
              {name}
            </Text>
            <Group className={classes.infoGroup} spacing={"4px"}>
              <FaMapMarkerAlt />
              <Text size={"sm"}>{location}</Text>
            </Group>

            <Group className={classes.infoGroup} spacing={"4px"}>
              <FaBusinessTime />
              <Text size={"sm"}>{experience} years of experience</Text>
            </Group>

            <Group noWrap mt={"xs"}>
              {subjects.map((s) => (
                <Badge
                  key={s}
                  sx={{ color: "#3347B0" }}
                  size="xs"
                  color={"indigo"}
                >
                  {s}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Group>
        <Button onClick={open} mt={"md"} sx={{ background: "#3347B0" }}>
          Book a lesson
        </Button>
      </Group>
    </Paper>
  );
}
