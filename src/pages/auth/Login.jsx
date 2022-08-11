import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Container size={"xs"} my={72}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor component={Link} to="/signup" size="sm">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
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
        <Group position="apart" mt="md">
          <Checkbox label="Remember me" />
          <Anchor
            sx={{ color: "#3347B0" }}
            component={Link}
            to="/password-recovery"
            size="sm"
          >
            Forgot password?
          </Anchor>
        </Group>
        <Button
          color={"indigo"}
          sx={{ background: "#3347B0" }}
          fullWidth
          mt="xl"
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
