import { Text, Stack, Group, Title, Overlay } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import SearchBox from "./SearchBox";

export default function Hero() {
  const { ref, width } = useElementSize();
  return (
    <Stack
      p={"xl"}
      py={72}
      sx={{
        background: `url(${process.env.PUBLIC_URL}/tb.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Overlay
        zIndex={0}
        opacity="0.5"
        gradient="linear-gradient(0deg, rgba(0,0,0,1) 0%,  rgba(255,255,255,0) 35%);"
      />
      <Title
        ref={ref}
        sx={{ fontSize: 72, maxWidth: 750, fontWeight: "900", zIndex: 1 }}
        order={1}
      >
        Hire the best tutors for you
      </Title>
      <Text sx={{ width: width, zIndex: 1 }} weight={500} size={"xl"}>
        Part of you personal and professional growth by providing a fun and
        effective way to learn.{" "}
      </Text>

      <SearchBox />
      <Group
        px={72}
        sx={{ color: "white", zIndex: 1 }}
        position="apart"
        mt={48}
      >
        <Stack sx={{ textAlign: "center" }} spacing={0}>
          <Text weight={800} size={32}>
            12 Years
          </Text>
          <Text weight={600} size={"xl"}>
            of proven results
          </Text>
        </Stack>
        <Stack sx={{ textAlign: "center" }} spacing={0}>
          <Text weight={800} size={32}>
            50+ Top
          </Text>
          <Text weight={600} size={"xl"}>
            Handpicked Tutors
          </Text>
        </Stack>
        <Stack sx={{ textAlign: "center" }} spacing={0}>
          <Text weight={800} size={32}>
            3500+ Students
          </Text>
          <Text weight={600} size={"xl"}>
            Tutored since 2022
          </Text>
        </Stack>
      </Group>
    </Stack>
  );
}
