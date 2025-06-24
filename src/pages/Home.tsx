import { Box, Container, Heading, Text, VStack, Image, Grid, useColorModeValue, Link } from '@chakra-ui/react';
import anneloes from '../assets/anneloes.jpg';
import bram from '../assets/bram.jpg';
import matthijs from '../assets/matthijs.jpg';
import david from '../assets/david.jpg';
import SwirlBackground from '../components/SwirlBackground';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const bgGradient = useColorModeValue(
    'linear(to-b, white, brand.lightBlue)',
    'linear(to-b, gray.900, gray.800)'
  );

  return (
    <Box>
      {/* Hero / Value Proposition */}
      <Box id="hero" bgGradient={bgGradient} h={{ base: '600px', md: '700px' }} minH="unset" pt={8} pb={0} position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} w="100vw" h="100%" zIndex={0}>
          <SwirlBackground />
        </Box>
        <Box
          position="absolute"
          bottom={0}
          left={0}
          w="100vw"
          h="320px"
          zIndex={1}
          pointerEvents="none"
          as="svg"
          viewBox="0 0 100 22"
          preserveAspectRatio="none"
          display="block"
          style={{ marginBottom: '-2px' }}
        >
          <polygon points="0,22 100,0 100,22" fill="white" />
        </Box>
        <Container maxW="1200px" position="relative" zIndex={2} h="100%" display="flex" flexDirection="column" justifyContent="center">
          <Heading size="3xl" mb={4} lineHeight="1.1" color="white">
           {t('home_hero_title')}
          </Heading>
          <Text fontSize="xl" color="black" mb={6}>
            {t('home_hero_subtitle')}
          </Text>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" py={24} bg="white">
        <Container maxW="1200px">
          <Heading size="xl" mb={12} color="brand.blue">{t('services_title')}</Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10}>
            <VStack align="start" p={6} bg="brand.lightBlue" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>{t('services_assessment_title')}</Heading>
              <Text color="gray.600">{t('services_assessment_text')}</Text>
            </VStack>
            <VStack align="start" p={6} bg="brand.lightBlue" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>{t('services_offsetting_title')}</Heading>
              <Text color="gray.600">{t('services_offsetting_text')}</Text>
            </VStack>
            <VStack align="start" p={6} bg="brand.lightBlue" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>{t('services_advice_title')}</Heading>
              <Text color="gray.600">{t('services_advice_text')}</Text>
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* Why FairShares Section */}
      <Box id="why" py={24} bg="brand.lightBlue">
        <Container maxW="1200px">
          <Heading size="xl" mb={12} color="brand.blue">{t('why_title')}</Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10}>
            <VStack align="start" p={6} bg="white" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>{t('why_projects_title')}</Heading>
              <Text color="gray.600">{t('why_projects_text')}</Text>
            </VStack>
            <VStack align="start" p={6} bg="white" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>{t('why_transparent_title')}</Heading>
              <Text color="gray.600">{t('why_transparent_text')}</Text>
            </VStack>
            <VStack align="start" p={6} bg="white" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>{t('why_verified_title')}</Heading>
              <Text color="gray.600">
                {t('why_verified_text1')} <Link href="https://www.spglobal.com/esg/solutions/environmental-registry/" color="gray.600" _hover={{ color: 'brand.blue' }} target="_blank" rel="noopener noreferrer">S&amp;P Global Environmental Registry</Link> {t('why_verified_text2')}
              </Text>
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" py={24} bg="white">
        <Container maxW="1200px">
          <Heading size="xl" mb={12} color="brand.blue">{t('about_title')}</Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            {t('about_text')}
          </Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={10}>
            <VStack p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={david} alt="David" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1} color="black">{t('team_david_name')}</Heading>
              <Text fontStyle="italic" color="black" fontFamily="heading" mb={2}>{t('team_david_title')}</Text>
              <Text fontFamily="body">{t('team_david_text')}</Text>
            </VStack>
            <VStack p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={anneloes} alt="Anneloes" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1} color="black">{t('team_anneloes_name')}</Heading>
              <Text fontStyle="italic" color="black" fontFamily="heading" mb={2}>{t('team_anneloes_title')}</Text>
              <Text fontFamily="body">{t('team_anneloes_text')}</Text>
            </VStack>
            <VStack p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={bram} alt="Bram" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1} color="black">{t('team_bram_name')}</Heading>
              <Text fontStyle="italic" color="black" fontFamily="heading" mb={2}>{t('team_bram_title')}</Text>
              <Text fontFamily="body">{t('team_bram_text')}</Text>
            </VStack>
            <VStack p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={matthijs} alt="Matthijs" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1} color="black">{t('team_matthijs_name')}</Heading>
              <Text fontStyle="italic" color="black" fontFamily="heading" mb={2}>{t('team_matthijs_title')}</Text>
              <Text fontFamily="body">{t('team_matthijs_text')}</Text>
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" bg="white" py={24}>
        <Container maxW="600px">
          <Heading size="xl" textAlign="center" mb={8} color="brand.blue">
            {t('contact_title')}
          </Heading>
          <VStack spacing={6} align="center">
            <Text fontSize="lg" color="gray.700" textAlign="center">
              {t('contact_email_text')}
              <br />
              <Link href="mailto:info@fairsharesapp.com" color="gray.600" _hover={{ color: 'brand.blue' }}>
                {t('contact_email_address')}
              </Link>
            </Text>
            <Text fontSize="lg" color="gray.700" textAlign="center">
              {t('contact_office_text')}
              <br />
              <Link href="https://www.google.com/maps/dir/51.8257131,5.9212977/Wilhelminasingel+4,+6524+AK+Nijmegen,+Netherlands/@51.8334262,5.8506781,13z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x47c7085b7a21002b:0xaf4d7a46cfa46959!2m2!1d5.8627602!2d51.841547!3e1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" color="gray.600" _hover={{ color: 'brand.blue' }} target="_blank" rel="noopener noreferrer">
                {t('contact_office_address')}
              </Link>
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home; 