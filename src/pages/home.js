import {
  TextLogo,
  CompanyName,
  Paragraph,
  Link,
} from "../components/Text.style";
import { Header, Section, Links } from "../components/Wrapper.style";
function Home() {
  return (
    <>
      <Header>
        <Link href="/home">
          <TextLogo>Dc.</TextLogo>
        </Link>
        <Links>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register" border>
              Sign Up
            </Link>
          </li>
        </Links>
      </Header>
      <Section fullscreen>
        <CompanyName>Developers Connect</CompanyName>
        <Paragraph>
          Collaborate and Share your ideas with other Developers around the
          world.
        </Paragraph>
        <Link href="/register" background dark>
          Join Now!
        </Link>
      </Section>
    </>
  );
}

export default Home;
