import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import User from "../components/model/user";
import { BhApiService } from "../components/tools/tools";
import { Grid, Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { color } from "framer-motion";

export default function Profile() {

  const [stats, setStats] = useState(null);
  const [ranked, setRanked] = useState(null);

  const router = useRouter();
  var bhid = router.query.bhid;

  console.log(router.query, "Router");

  useEffect(() => {
    const getData = async () => {
      console.log(router.query, "getData")
      const statResponse = await BhApiService.getStatsByBhid(
        router.query["bhid"]
      );
      const rankedResponse = await BhApiService.getRankedDataByBhid(
        router.query["bhid"]
      );

      setStats(statResponse.data);
      setRanked(rankedResponse.data);
    };

    if (router.isReady) {
      getData();
      console.log(ranked?.data?.tier)
      console.log(router.query);
    }

  }, [router.isReady]);

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
        <section>
          <Container>
            <Grid.Container gap={2} justify="center">
              <Row gap={1}>
                <Col>
                  <Card css={{ bg: "" }} isHoverable >
                    <Card.Header>
                      <Text weight={"bold"} >Brawlhalla ID</Text>
                    </Card.Header>
                    <Card.Divider css={{ bg: "linear-gradient(245deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)" }} />

                    <Card.Body>
                      <Row justify="center" align="center">
                        <Text size="$3xl" weight={"bold"} css={{ textGradient: "45deg, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%" }}>{stats?.brawlhalla_id ? stats.brawlhalla_id : "N/A"}</Text>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card isHoverable>
                    <Card.Header>
                      <Text weight={"bold"}>Username</Text>
                    </Card.Header>
                    <Card.Divider css={{ bg: "linear-gradient(245deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)" }} />

                    <Card.Body>
                      <Row justify="center" align="center">
                        <Text size="$3xl" weight={"bold"} css={{ textGradient: "-45deg, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%" }}>{stats?.name ? stats.name : "N/A"}</Text>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Spacer y={1} />
              <Row gap={1}>
                <Col>
                  <Card isHoverable>
                    <Card.Header>
                      <Text weight={"bold"}>Current Rating</Text>
                    </Card.Header>
                    <Card.Divider css={{ bg: "linear-gradient(90deg, rgba(130,231,234,1) 0%, rgba(106,121,234,1) 100%)" }} />
                    <Card.Body>
                      <Row justify="center" align="center">
                        <Text size="$3xl" weight={"bold"} css={{ textGradient: "-45deg, $blue600 -20%, $blue500 60%" }}>{ranked?.data?.rating ? ranked.data.rating : "N/A"}</Text>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card isHoverable>
                    <Card.Header>
                      <Text weight={"bold"}>Peak Rating</Text>
                    </Card.Header>
                    <Card.Divider css={{ bg: "linear-gradient(90deg, rgba(130,231,234,1) 0%, rgba(106,121,234,1) 100%)" }} />

                    <Card.Body>
                      <Row justify="center" align="center">
                        <Text size="$3xl" weight={"bold"} css={{ textGradient: "45deg, $blue600 -20%, $blue500 60%" }}>{ranked?.data?.peak_rating ? ranked.data.peak_rating : "N/A"}</Text>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card isHoverable>
                    <Card.Header>
                      <Text weight={"bold"}>Tier</Text>
                    </Card.Header>
                    <Card.Divider css={{ bg: "linear-gradient(90deg, rgba(130,231,234,1) 0%, rgba(106,121,234,1) 100%)" }} />

                    <Card.Body>
                      <Row justify="center" align="center">
                        <Text size="$3xl" weight={"bold"} css={{ textGradient: "90deg, $blue600 -20%, $blue500 60%" }}>
                          {ranked?.data?.tier ? ranked.data.tier : "N/A"}
                        </Text>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Grid.Container>
          </Container>
        </section>
      </main>
    </>
  );
}
