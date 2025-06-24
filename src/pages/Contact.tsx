import { Box, Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, SimpleGrid, Icon } from '@chakra-ui/react'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const ContactInfo = ({ icon, title, content }: { icon: any; title: string; content: string }) => {
  return (
    <VStack p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
      <Icon as={icon} w={6} h={6} color="brand.blue" />
      <Heading size="sm">{title}</Heading>
      <Text color="gray.600">{content}</Text>
    </VStack>
  )
}

const Contact = () => {
  return (
    <Box py={20}>
      <Container maxW="1200px">
        <VStack spacing={10}>
          <Box textAlign="center">
            <Heading size="2xl" mb={6}>Contact Us</Heading>
            <Text fontSize="xl" color="gray.600" maxW="600px" mx="auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="100%">
            <ContactInfo
              icon={FaEnvelope}
              title="Email"
              content="hello@fairsharesapp.com"
            />
            <ContactInfo
              icon={FaMapMarkerAlt}
              title="Address"
              content="Wilhelminasingel 4, 6524 AK Nijmegen"
            />
          </SimpleGrid>

          <Box width="100%" maxW="600px">
            <VStack spacing={4} as="form">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your name" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your email" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your message" rows={6} />
              </FormControl>

              <Button colorScheme="blue" size="lg" width="100%">
                Send Message
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 