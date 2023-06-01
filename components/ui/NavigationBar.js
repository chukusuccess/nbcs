import { Button, Input, Link, Navbar, Text, Spa} from "@nextui-org/react";
import { useRouter } from "next/router";

const NavigationBar = ({ children }) => {

    const router = useRouter();

  return (
    <Navbar isCompact isBordered variant="sticky">
      <Navbar.Brand>
        <Text onClick={() => {router.push("/home")}} b color="inherit" hideIn="xs">
          NBCS
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        <Navbar.Link href="/home">Home</Navbar.Link>
        <Navbar.Link href="/ranking">Ranking</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Input
          placeholder="Brawlhalla ID"
          onKeyDown={(e) => {
            if (e.key == "Enter" && isNaN( String.fromCharCode(e.target.value))) {
              router.push(`/profile?bhid=${e.target.value}`);
            }
          }}
        />
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>

  );
};

export default NavigationBar;
