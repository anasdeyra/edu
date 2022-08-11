import { Text, Stack, Group, Title, Overlay, Image } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import SearchBox from "./SearchBox";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Carousel } from "@mantine/carousel";

export default function Hero() {
  const { ref, width } = useElementSize();
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <Stack
      p={"xl"}
      py={72}
      sx={{
        position: "relative",
      }}
    >
      <Carousel
        sx={{
          zIndex: 0,
          position: "absolute",
          width: "100%",
          left: 0,
          top: 0,
          height: "100%",
        }}
        mx="auto"
        withIndicators={false}
        withControls={false}
        height={200}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <Carousel.Slide key={i}>
            <Image src={`${process.env.PUBLIC_URL}/images/s${i}.jpg`} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Overlay
        zIndex={0}
        opacity="0.2"
        gradient="radial-gradient(circle, rgba(255,255,255,0) 65%, rgba(0,0,0,1) 100%)"
      />
      <Title
        ref={ref}
        sx={{
          fontSize: 72,
          maxWidth: 750,
          fontWeight: "900",
          zIndex: 1,
          color: "black",
        }}
        order={1}
      >
        Hire the best tutors for you
      </Title>
      <Text
        sx={{ width: width, zIndex: 1, color: "black" }}
        weight={500}
        size={"xl"}
      >
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
