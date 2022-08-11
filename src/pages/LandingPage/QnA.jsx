import { Accordion, Box, SimpleGrid, Text, Title } from "@mantine/core";
import React from "react";

export default function QnA() {
  return (
    <SimpleGrid mb={144} cols={2}>
      <Box pl="xl" mb={144} mt={72}>
        <Text weight={500}>FREQUENTLY ASKED QUESTIONS</Text>
        <Title>Useful information</Title>

        <Accordion mt="xl">
          {QNA.map(({ panel, control }, i) => (
            <Accordion.Item value={control}>
              <Accordion.Control>{control}</Accordion.Control>
              <Accordion.Panel>{panel}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
      <Box
        sx={{
          background: `url(${process.env.PUBLIC_URL}/q.jpg)`,
          backgroundPosition: "0 -250px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
    </SimpleGrid>
  );
}

const QNA = [
  {
    panel:
      "sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium,totam aperiam,eaque ipsaquae ab illoinventatis et quasi architecto beatae vitae dicta sunt expilicabo nemo enim ipsam.",
    control: "How to find tutoring at Mulang?",
  },
  {
    panel:
      "sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium,totam aperiam,eaque ipsaquae ab illoinventatis et quasi architecto beatae vitae dicta sunt expilicabo nemo enim ipsam.",
    control: "Tracking student progress",
  },
  {
    panel:
      "sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium,totam aperiam,eaque ipsaquae ab illoinventatis et quasi architecto beatae vitae dicta sunt expilicabo nemo enim ipsam.",
    control: "How much do lessons cost?",
  },
  {
    panel:
      "sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium,totam aperiam,eaque ipsaquae ab illoinventatis et quasi architecto beatae vitae dicta sunt expilicabo nemo enim ipsam.",
    control: "What payment methods are accepted ?",
  },
];
