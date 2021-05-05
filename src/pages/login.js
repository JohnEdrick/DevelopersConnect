import { Container } from "../components/Wrapper.style";
import { Form, Input } from "../components/Form.style";
import { Button } from "../components/ButtonStyles.style";
import { SignIn, Link, Paragraph } from "../components/Text.style";
function Login() {
  return (
    <Container>
      <Form>
        <SignIn>Sign In</SignIn>
        <Input type="text" />
        <Input type="text" />
        <Link>
          <Paragraph>Forgot Password?</Paragraph>
        </Link>
        <Button dark>Login</Button>
      </Form>
    </Container>
  );
}

export default Login;
