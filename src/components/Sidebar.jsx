import { Box, Heading, VStack, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box bg="#fff1e5" p={4} borderRadius="md">
      <Heading size="md" mb={4}>Trending Articles</Heading>
      <VStack align="start" spacing={2}>
        <Link href="#">Article 1</Link>
        <Link href="#">Article 2</Link>
        <Link href="#">Article 3</Link>
        <Link href="#">Article 4</Link>
        <Link href="#">Article 5</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;