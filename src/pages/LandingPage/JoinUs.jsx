import { Box, Text, Title, Stack, Overlay, Button } from "@mantine/core";

import { Link } from "react-router-dom";

export default function JoinUs() {
  return (
    <Box my={144}>
      <Stack px={"xl"} spacing={0}>
        <Text weight={500}>JOIN US</Text>
        <Title>Become a tutor at Mulang</Title>
      </Stack>
      <Box
        mt={72}
        p={"xl"}
        sx={{
          background: `url(${process.env.PUBLIC_URL}/jb.jpg)`,
          backgroundPosition: "0 -100px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          height: "500px",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Overlay opacity={0} zIndex={0} blur={3} />
        <Button
          to={"/tutor-signup"}
          component={Link}
          radius={"sm"}
          sx={{
            background: "#3347B0",
            zIndex: "1",
            "&:hover": {
              background: "#4357C0",
            },
          }}
          size="xl"
          m={0}
        >
          Get started
        </Button>
      </Box>
    </Box>
  );
}
