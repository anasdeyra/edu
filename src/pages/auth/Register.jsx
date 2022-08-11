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
} from "@mantine/core";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Container size={"xs"} my={72}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome to Mulang
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{" "}
        <Anchor component={Link} to="/login" size="sm">
          Login
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
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

        <Button
          color={"indigo"}
          sx={{ background: "#3347B0" }}
          fullWidth
          mt="xl"
        >
          Sign up
        </Button>
      </Paper>
    </Container>
  );
}
