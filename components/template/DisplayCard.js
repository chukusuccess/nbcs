import { Card, Row, Text } from "@nextui-org/react";

class DisplayCard {
  constructor(
    headerText = "Header",
    headerTextSize = "initial",
    headerTextWeight = "Bold",
    headDividerColor = "",
    bodyText = "Body",
    bodyTextSize = "$3xl",
    bodyTextWeight = "Bold",
    bodyTextJustify = "center",
    bodyTextAlign = "center",
    bodyTextColor = "",
    background = ""
  ) {
    this.headerText = headerText;
    this.headerTextSize = headerTextSize;
    this.headerTextWeight = headerTextWeight;
    this.headDividerColor = headDividerColor;
    this.bodyText = bodyText;
    this.bodyTextSize = bodyTextSize;
    this.bodyTextWeight = bodyTextWeight;
    this.bodyTextJustify = bodyTextJustify;
    this.bodyTextAlign = bodyTextAlign;
    this.bodyTextColor = bodyTextColor;
    this.background = background;

    return (
      <Card css={{ bg: { background } }} isHoverable>
        <Card.Header>
          <Text size={this.headerTextSize} weight={this.headerTextWeight}>
            {this.headerText}
          </Text>
        </Card.Header>

        <Card.Divider css={{ bg: { headDividerColor } }} />

        <Card.Body>
          <Row justify={this.bodyTextJustify} align={this.bodyTextAlign}>
            <Text
              size={this.bodyTextSize}
              weight={this.bodyTextWeight}
              css={{ bg: { bodyTextColor } }}
            >
              {this.bodyText}
            </Text>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default DisplayCard;
