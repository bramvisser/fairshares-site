import { Box, Container, Text, VStack, Button, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Privacy = () => (
  <Box py={20}>
    <Container maxW="800px">
      <Heading size="xl" mb={8} textAlign="center" color="brand.blue">Privacy Policy</Heading>
      <VStack spacing={6} align="start">
        <Text>
          This is the Privacy Policy of FairShares (hereinafter referred to as "FS", "WE", "US" or "OUR"), a company with address Wilhelminasingel 4, Nijmegen, the Netherlands. FS is registered with the Chamber of Commerce under number 77435532. This Privacy Policy explains how we collect, use, share and protect data in relation to our services. We collect this data when you use our services. We process personal data in a manner that is consistent with the General Data Protection Regulation (the "GDPR"), the implementing legislation based on the GDPR, and other applicable privacy laws.
        </Text>
        <Text>
          Our Privacy Policy applies to everyone who uses our services. By using our services, you understand and agree to the collection and use of information in accordance with this privacy policy.
        </Text>
        <Text fontWeight="bold" mt={4}>What data do we collect?</Text>
        <Text>
          We collect personal data that you provide to us. This may include the following data: We collect data collected through our websites. See also the privacy policy for our website.
        </Text>
        <Text fontWeight="bold" mt={4}>Purposes of data processing</Text>
        <Text>
          By using our services, you leave certain data with us, for example by creating an account. This may include data such as name, email address, telephone number and payment details. FS collects and processes this data to make our services accessible. We also collect information about your computer (such as IP address and browser type) so that we can improve our services. Personal data is not provided to third parties, unless FS is required to do so by law or regulation.
        </Text>
        <Text fontWeight="bold" mt={4}>How is this information shared?</Text>
        <Text>
          We will not rent or sell your (personal) data to third parties, unless you give permission or to comply with a legal obligation.
        </Text>
        <Text fontWeight="bold" mt={4}>Legal request and prevention of harm</Text>
        <Text>
          On the basis of a legal request, we are entitled to access your information and to store and/or share it in response to a legal request (such as a search warrant, court order or subpoena). We are also entitled to store and/or share your information when we believe it is necessary to detect, prevent and address fraud or other illegal activities and to protect us, you and others. Information we receive about you may be accessed, edited and retained for a longer period if necessary due to a legal request or obligation, an investigation relating to our terms, policies or to otherwise prevent harm.
        </Text>
        <Text fontWeight="bold" mt={4}>Security and safety</Text>
        <Text>
          FS has taken appropriate technical and organizational measures to protect your data against any form of unlawful processing.
        </Text>
        <Text fontWeight="bold" mt={4}>Retention period</Text>
        <Text>
          In accordance with the GDPR and other relevant legislation, FS does not retain personal data longer than is necessary for the purposes for which it is collected or processed. If you would like more information about how long your specific personal data is retained, you can contact info@fairsharesapp.com.
        </Text>
        <Text fontWeight="bold" mt={4}>Right of access, corrections, right to object and right to data portability</Text>
        <Text>
          If you wish to access your personal data, change or delete your data, or if you wish to have your personal data transferred in whole or in part to you or to a third party, you can contact FS by sending an email to info@fairsharesapp.com or by sending a letter to:
        </Text>
        <Text>
          FairShares<br />
          Wilhelminasingel 4<br />
          6524 AK, Nijmegen
        </Text>
        <Text>
          If you object to the way we handle your data, you can file a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).
        </Text>
        <Text fontWeight="bold" mt={4}>Changes</Text>
        <Text>
          FS may amend or update this Privacy Policy from time to time. You are therefore advised to consult this Privacy Policy regularly. Changes to this Privacy Policy take effect as soon as they are published on our website.
        </Text>
        <Text fontWeight="bold" mt={4}>Contact</Text>
        <Text>
          If you have any questions about this Privacy Policy, you can contact FS by sending an email to info@fairsharesapp.com.
        </Text>
      </VStack>
      <Button
        as={RouterLink}
        to="/"
        bg="brand.blue"
        color="white"
        size="md"
        mt={10}
        _hover={{
          bg: 'brand.blue',
          transform: 'scale(1.05)',
          boxShadow: '0 4px 16px rgba(0, 188, 212, 0.15)',
          border: 'none',
          borderColor: 'transparent',
          outline: 'none',
          color: 'white',
        }}
        _focus={{
          border: 'none',
          borderColor: 'transparent',
          outline: 'none',
          boxShadow: 'none',
        }}
        transition="all 0.2s"
      >
        Back to Home
      </Button>
    </Container>
  </Box>
);

export default Privacy; 