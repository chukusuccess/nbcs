import { useState } from "react";
import { useRouter } from 'next/router';
import { Input, Spacer, Button, Container, Card, Row, Text, Col } from "@nextui-org/react";
import Head from "next/head";

export default function RegistrationPage() {

	const gapValue = 0;

	const router = useRouter();

	const [username, setUsername] = useState("");
	const [bhid, setBhid] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = () => {
		const data = bhid;
		console.log(data, "data")
		router.push(`/profile?bhid=${data}`);
		// localStorage.setItem("nbcs", JSON.stringify({name: "dixit", bhid: bhid}))
		localStorage.setItem("nbcs", JSON.stringify({ bhid: bhid }))
	};

	return (
		<>
			<Head>
				<title>NBCS</title>
				<meta
					name="description"
					content="Nigerian Brawlhalla Chammpionship Series"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<section >
					<Container>
						<Row gap={gapValue}>
							<Input id="usrname" clearable label="Username" placeholder="John Doe" size="xl" onChange={(e) => setUsername(e.target.value)}/>
						</Row>
						<Row gap={gapValue}>
							<Input id="bhid" clearable label="Brawlhalla ID" placeholder="123" size="xl" onChange={(e) => setBhid(e.target.value)}/>
						</Row>
						<Row gap={gapValue}>
							<Input.Password id="pwd" clearable label="Password" placeholder="MySecretPassword" size="xl" onChange={(e) => setPassword(e.target.value)}/>
						</Row>
						<Row gap={gapValue}>
							<Button color="gradient" onPress={() => handleClick()} shadow size="xl">
								Register
							</Button>
						</Row>
					</Container>
				</section>
			</main>
		</>
	);
}
