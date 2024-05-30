import { Container, Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar.jsx";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Flex direction={{ base: "column", md: "row" }} spacing={8}>
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h1" size="xl" mb={4}>Featured Article</Heading>
          <Box bg="#f3f2ee" p={4} borderRadius="md">
            <Heading as="h2" size="lg" mb={2}>Title of the Featured Article</Heading>
            <Text>Summary of the featured article goes here. This is a brief introduction to the article content.</Text>
          </Box>
        </Box>
        <Box flex="1">
          <Sidebar />
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;