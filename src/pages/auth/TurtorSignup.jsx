import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Stepper,
} from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TutorSignup() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <>
      <Container size={"xs"} my={72}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Become a tutor
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{" "}
          <Anchor component={Link} to="/login" size="sm">
            Login
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Stepper
            color={"#3347B0"}
            active={active}
            onStepClick={setActive}
            breakpoint="sm"
          >
            <Stepper.Step label="First step" description="Create an account">
              <Group grow>
                <TextInput
                  type={"text"}
                  label="First name"
                  placeholder="Jhon"
                  required
                />
                <TextInput
                  type={"text"}
                  label="Last name"
                  placeholder="Doe"
                  required
                />
              </Group>
              <TextInput
                mt="md"
                type={"email"}
                label="Email"
                placeholder="you@example.com"
                required
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
              />
              <PasswordInput
                label="Password Confirmations"
                placeholder="Your password confirmation"
                required
                mt="md"
              />
            </Stepper.Step>
            <Stepper.Step label="Second step" description="Fill in information">
              Step 2 content: Verify email
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button
              sx={{ background: "#3347B0" }}
              color={"indigo"}
              onClick={nextStep}
            >
              Next step
            </Button>
          </Group>
        </Paper>
      </Container>
    </>
  );
}
