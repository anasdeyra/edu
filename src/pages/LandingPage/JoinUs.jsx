import { Box, Text, Title, Stack, Button, SimpleGrid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";

export default function JoinUs() {
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return (
    <Box px={isSmall ? "md" : 120} my={isSmall ? 72 : 144}>
      <Stack spacing={0}>
        <Text weight={500}>JOIN US</Text>
        <Title>Become a tutor at tutors street</Title>
      </Stack>
      <SimpleGrid mt={isSmall ? 48 : 72} cols={isSmall ? 1 : 2}>
        <Box
          sx={
            isSmall
              ? { display: "none" }
              : {
                  background: `url(${process.env.PUBLIC_URL}/images/jb.jpg)`,

                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  display: "flex",
                  height: isSmall ? "200px" : "500px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }
          }
        ></Box>
        <Stack>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            illo, expedita culpa autem reiciendis cum excepturi velit aut.
            Laboriosam, in ad. Molestias laudantium consectetur dolorum nulla
            dolores optio magni explicabo.
          </Text>
          <Button
            mt={"xl"}
            to={"/signup"}
            component={Link}
            radius={"sm"}
            color="indigo"
            sx={{
              background: "#3347B0",
              zIndex: "1",
              "&:hover": {
                background: "#3347B0",
              },
              color: "white",
            }}
            size={isSmall ? "lg" : "xl"}
            m={0}
          >
            Get started
          </Button>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
