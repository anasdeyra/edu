import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  createStyles,
  Group,
  Image,
  Spoiler,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaMapMarkerAlt, FaBusinessTime, FaStar } from "react-icons/fa";
import BookingModal from "./BookingModal";
import { useMediaQuery } from "@mantine/hooks";
import UsersReviews from "./UsersReviews";

const useStyles = createStyles((t) => ({
  wrapper: {
    marginBottom: 144,
    [t.fn.smallerThan("md")]: {
      marginBottom: 72,
    },
  },
  infoGroup: {
    color: t.colors.gray[6],
  },
  reviews: {
    background: "#3347B0",
  },
}));

export default function TutorProfile() {
  const { classes } = useStyles();
  const [opened, { close, open }] = useDisclosure();
  const isSmall = useMediaQuery("(max-width: 1000px)");

  return (
    <Box mt={"xl"} className={classes.wrapper}>
      <BookingModal close={close} opened={opened} />
      <Stack px={isSmall ? "md" : "xl"} spacing={"xl"}>
        {isSmall ? (
          <Stack>
            <Group align={"start"}>
              <Avatar
                radius={"sm"}
                size="xl"
                src={
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                }
              />
              <Stack spacing={0}>
                <Text size={"xl"} weight={"bold"}>
                  John Doe
                </Text>
                <Group className={classes.infoGroup} spacing={"4px"}>
                  <FaMapMarkerAlt />
                  <Text size={"sm"}>Delhi, India</Text>
                </Group>

                <Group className={classes.infoGroup} spacing={"4px"}>
                  <FaBusinessTime />
                  <Text size={"sm"}>5 years of experience</Text>
                </Group>

                <Group mt={"xs"}>
                  <Badge sx={{ color: "#3347B0" }} size="xs" color={"indigo"}>
                    Maths
                  </Badge>
                  <Badge sx={{ color: "#3347B0" }} size="xs" color={"indigo"}>
                    Algebra
                  </Badge>
                </Group>
              </Stack>
            </Group>
            <Button onClick={open} mt={"md"} sx={{ background: "#3347B0" }}>
              Book a lesson
            </Button>{" "}
            <Button color={"indigo"} variant="light">
              Message
            </Button>
            <Stack spacing={"xs"}>
              <Group mt={"xs"} spacing={"xs"} align={"center"}>
                <Text weight={"bold"}>Rating:</Text>
                <Group spacing={"0"}>
                  <ActionIcon color={"yellow"}>
                    <FaStar />
                  </ActionIcon>
                  <ActionIcon color={"yellow"}>
                    <FaStar />
                  </ActionIcon>
                  <ActionIcon color={"yellow"}>
                    <FaStar />
                  </ActionIcon>
                  <ActionIcon color={"yellow"}>
                    <FaStar />
                  </ActionIcon>
                  <ActionIcon variant="subtle">
                    <FaStar />
                  </ActionIcon>
                </Group>
              </Group>
            </Stack>
          </Stack>
        ) : (
          <Group position="apart">
            <Group align={"start"}>
              <Avatar
                radius={"sm"}
                size="xl"
                src={
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                }
              />
              <Stack spacing={0}>
                <Text size={"xl"} weight={"bold"}>
                  John Doe
                </Text>
                <Group className={classes.infoGroup} spacing={"4px"}>
                  <FaMapMarkerAlt />
                  <Text size={"sm"}>Delhi, India</Text>
                </Group>

                <Group className={classes.infoGroup} spacing={"4px"}>
                  <FaBusinessTime />
                  <Text size={"sm"}>5 years of experience</Text>
                </Group>

                <Group mt={"xs"}>
                  <Badge sx={{ color: "#3347B0" }} size="xs" color={"indigo"}>
                    Maths
                  </Badge>
                  <Badge sx={{ color: "#3347B0" }} size="xs" color={"indigo"}>
                    Algebra
                  </Badge>
                </Group>
              </Stack>
            </Group>

            <Stack>
              <Button onClick={open} mt={"md"} sx={{ background: "#3347B0" }}>
                Book a lesson
              </Button>
              <Button color={"indigo"} variant="light">
                Message
              </Button>
              <Stack spacing={"xs"}>
                <Group mt={"xs"} spacing={"xs"} align={"center"}>
                  <Text weight={"bold"}>Rating:</Text>
                  <Group spacing={"0"}>
                    <ActionIcon color={"yellow"}>
                      <FaStar />
                    </ActionIcon>
                    <ActionIcon color={"yellow"}>
                      <FaStar />
                    </ActionIcon>
                    <ActionIcon color={"yellow"}>
                      <FaStar />
                    </ActionIcon>
                    <ActionIcon color={"yellow"}>
                      <FaStar />
                    </ActionIcon>
                    <ActionIcon variant="subtle">
                      <FaStar />
                    </ActionIcon>
                  </Group>
                </Group>
              </Stack>
            </Stack>
          </Group>
        )}

        <Stack mt={isSmall ? 24 : 48} spacing={"xs"}>
          <Text weight={"bold"}>About:</Text>
          <Text>
            <Spoiler
              styles={{
                control: { fontWeight: "600", fontSize: "14px", color: "#AAA" },
              }}
              showLabel="Show more"
              hideLabel="Show less"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              tempora iusto ipsum modi quos, odit accusamus accusantium possimus
              iste doloribus eaque omnis sunt quam ullam blanditiis
              exercitationem rerum sed non.
            </Spoiler>
          </Text>
        </Stack>
        <Stack spacing={"xs"}>
          <Text weight={"bold"}>Qualifications:</Text>
          <Text>PhD, Bachelor, Master</Text>
        </Stack>
      </Stack>
      <Stack
        mt={isSmall ? 72 : 128}
        py={isSmall ? 72 : 128}
        px={isSmall ? "md" : "xl"}
        className={classes.reviews}
        spacing={"0"}
      >
        <Title mb={isSmall ? 24 : 48} sx={{ color: "white" }}>
          Reviews
        </Title>
        <UsersReviews />
      </Stack>
    </Box>
  );
}
