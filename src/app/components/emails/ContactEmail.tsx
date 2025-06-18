import { Html, Body, Container, Text, Heading } from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Body style={{ backgroundColor: "#f9fafb", fontFamily: "sans-serif" }}>
        <Container
          style={{
            padding: "32px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
          }}
        >
          <Heading style={{ fontSize: "20px", marginBottom: "24px" }}>
            📬 New Contact Message
          </Heading>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Message:</strong>
          </Text>
          <Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
