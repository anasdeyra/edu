import { Text, Stack, Group, Title, Button, Autocomplete } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { FaSearch } from "react-icons/fa";

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
      }}
    >
      <Title
        ref={ref}
        sx={{ fontSize: 72, maxWidth: 750, fontWeight: "900" }}
        order={1}
      >
        Here the best tutors for you
      </Title>
      <Text sx={{ width: width }} weight={500} size={"xl"}>
        Part of you personal and professional growth by providing a fun and
        effective way to learn.{" "}
      </Text>
      <Button
        mt={"xl"}
        href="#"
        component="a"
        radius={0}
        color="indigo"
        sx={{ background: "#3347B0", alignSelf: "start" }}
        size="xl"
      >
        Register
      </Button>

      <Autocomplete
        sx={{ width: width }}
        mt={"xl"}
        radius={0}
        icon={<FaSearch />}
        placeholder="Search a tutor"
        dropdownPosition="bottom"
        data={[
          "Jamie Navarro",
          "Fiona Wyatt",
          "Abby Bond",
          "Nylah Valencia",
          "Jayson Patterson",
        ]}
        size="xl"
      ></Autocomplete>
      <Group px={72} sx={{ color: "white" }} position="apart" mt={32}>
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
