import {
  Avatar,
  Group,
  Paper,
  Stack,
  Text,
  createStyles,
  Badge,
  Button,
  Spoiler,
  ThemeIcon,
  ActionIcon,
} from "@mantine/core";

import { FaBusinessTime, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import BookingModal from "../TutorProfile/BookingModal";
import { Link } from "react-router-dom";

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
  lessonsCount,
  description,
  rating,
  reviewsCount,
  hourly,
}) {
  const { classes } = useStyles();
  const [opened, { close, open }] = useDisclosure();
  return (
    <Paper shadow={"xs"} radius="sm" p={"md"}>
      <BookingModal close={close} opened={opened} />
      <Group align={"start"} position="apart">
        <Group align={"start"}>
          <Stack spacing={"0"} align={"center"}>
            <Avatar radius={"sm"} size="xl" src={picture} />
            <Text mt={"xs"} weight={"600"} size={"sm"}>
              {hourly}$/h
            </Text>
            <Text size={"xs"} color="dimmed">
              {lessonsCount} lessons
            </Text>
          </Stack>
          <Stack spacing={0}>
            <Text
              to={`/tutor/${name}`}
              component={Link}
              size={"xl"}
              weight={"bold"}
            >
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
            <Spoiler
              sx={{ maxWidth: 300 }}
              maxHeight={50}
              showLabel="Show more"
              hideLabel="Hide"
              styles={{ control: { fontSize: "12px", fontWeight: "600" } }}
            >
              <Text mt={"xs"} size={"xs"} color="dimmed">
                {description}
              </Text>
            </Spoiler>
          </Stack>
        </Group>
        <Stack spacing={"xs"}>
          <Button onClick={open} mt={"md"} sx={{ background: "#3347B0" }}>
            Book trial lesson
          </Button>
          <Button color={"indigo"} variant="light">
            Message
          </Button>
          <Group position="apart" spacing={0}>
            {[1, 2, 3, 4, 5].map((i) =>
              i <= rating ? (
                <ThemeIcon key={i} variant="subtle" color={"yellow"}>
                  <FaStar />
                </ThemeIcon>
              ) : (
                <ActionIcon key={i} variant="subtle">
                  <FaStar />
                </ActionIcon>
              )
            )}
          </Group>
          <Text sx={{ alignSelf: "center" }} size={"sm"} weight={"bold"}>
            {reviewsCount} reviews
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
}
