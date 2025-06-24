import { Box, Container, Flex, Link, Text, HStack, IconButton, Image, VStack, Stack } from '@chakra-ui/react';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';
import planvivo from '../assets/planvivologo.png';
import sandplogo from '../assets/sandplogo.jpeg';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box bg="white" borderTop="1px" borderColor="gray.200" py={8} mt={16}>
      <Container maxW="1200px">
        <Box
          display="grid"
          gridTemplateColumns={{ base: '1fr', md: 'auto 1fr auto' }}
          alignItems="center"
          gap={8}
          py={2}
          position="relative"
        >
          {/* Logo Row */}
          <HStack align="center" gap={1} justify={{ base: 'center', md: 'flex-start' }}>
            <Image src={logo} alt="FairShares Logo" h="28px" />
            <Text fontFamily="Montserrat Alternates, heading" color="brand.blue" fontWeight="bold" fontSize="md">
              FairShares
            </Text>
            <Link href="https://www.planvivo.org/fairshares" isExternal>
              <Image src={planvivo} alt="Plan Vivo Logo" h="32px" />
            </Link>
            <Image src={sandplogo} alt="S&P Global Logo" h="20px" />
          </HStack>

          {/* Absolutely Centered Info Block */}
          <Box position="absolute" left={0} right={0} margin="auto" width="fit-content" zIndex={1}>
            <VStack spacing={1} fontSize="sm" textAlign="center">
              <Text color="gray.600">KvK: 77435532</Text>
              <Text color="gray.600">IBAN: NL37TRIO0788946641</Text>
            </VStack>
          </Box>

          {/* Social Icons */}
          <HStack spacing={4} justify={{ base: 'center', md: 'flex-end' }} mt={{ base: 6, md: 0 }}>
            <IconButton as={Link} href="https://www.linkedin.com/company/fairshares-app/" aria-label="LinkedIn" icon={<FaLinkedin />} variant="ghost" color="gray.600" _hover={{ color: 'brand.blue' }} />
            <IconButton as={Link} href="https://www.instagram.com/fairsharesapp/?hl=en" aria-label="Instagram" icon={<FaInstagram />} variant="ghost" color="gray.600" _hover={{ color: 'brand.blue' }} />
            <IconButton as={Link} href="mailto:info@fairsharesapp.com" aria-label="Email" icon={<FaEnvelope />} variant="ghost" color="gray.600" _hover={{ color: 'brand.blue' }} />
          </HStack>
        </Box>
        <Text textAlign="center" color="gray.400" fontSize="sm" mt={6}>
          FairShares B.V. All rights reserved |{' '}
          <Link as={RouterLink} to="/privacy" color="gray.400" _hover={{ color: 'brand.blue' }} onClick={() => window.scrollTo(0, 0)}>
            Privacy statement
          </Link>
          {' '}|{' '}
          <Link as={RouterLink} to="/terms" color="gray.400" _hover={{ color: 'brand.blue' }} onClick={() => window.scrollTo(0, 0)}>
            Terms and conditions
          </Link>
        </Text>
      </Container>
    </Box>
  );
};

export default Footer; 