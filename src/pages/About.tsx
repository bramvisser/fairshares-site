import { Box, Container, Heading, Text, VStack, Image, Grid, GridItem, Flex, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import anneloes from '../assets/anneloes.jpg';
import bram from '../assets/bram.jpg';
import matthijs from '../assets/matthijs.jpg';
import david from '../assets/david.jpg';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const About = () => {
  const bgGradient = useColorModeValue(
    'linear(to-b, white, brand.lightBlue)',
    'linear(to-b, gray.900, gray.800)'
  );

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient={bgGradient}
        minH="100vh"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px" pt={32}>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10}>
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Heading
                  size="2xl"
                  mb={6}
                  bgGradient="linear(to-r, brand.blue, brand.green)"
                  bgClip="text"
                >
                  Jouw bijdrage aan een duurzame toekomst
                </Heading>
                <Text fontSize="xl" color="gray.600" mb={8}>
                  Met FairShares krijg je inzicht in je CO2-uitstoot en kun je eenvoudig je steentje bijdragen aan een beter klimaat.
                </Text>
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>

        {/* Decorative background elements */}
        <Box
          position="absolute"
          bottom="-10%"
          left="-5%"
          w="120%"
          h="20%"
          bg="brand.lightBlue"
          transform="rotate(-3deg)"
          zIndex={-1}
        />
      </Box>

      {/* Mission Section */}
      <Container maxW="1200px" py={20}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={16}>
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Heading size="lg" mb={6} color="brand.blue">
                Onze Missie
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Als het wereldwijde debat over klimaatverandering, onze impact erop en hoe we beide kunnen minimaliseren steeds heviger wordt, willen wij ons deel van de oplossing bieden. De definitieve oplossing voor de opwarming van de aarde is een wereldwijde negatieve koolstofuitstoot, bij voorkeur zonder al te veel opofferingen voor onze gewenste manier van leven.
              </Text>
            </MotionBox>
          </GridItem>
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Heading size="lg" mb={6} color="brand.green">
                Hoe wij werken
              </Heading>
              <Text fontSize="lg" color="gray.600">
                We streven naar een transparant bedrijf. We gebruiken momenteel data van onder andere Milieu Centraal en RIVM om inzicht te krijgen in welke activiteiten en producten de meeste CO2 verbruiken in Nederlandse huishoudens. Via Taking Root kopen we Plan Vivo Certificaten of CO2-certificaten aan.
              </Text>
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>

      {/* Team Section */}
      <Box bg="white" py={20}>
        <Container maxW="1200px">
          <Heading size="xl" textAlign="center" mb={16} color="brand.blue" fontFamily="heading">
            Ons Team
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={10}>
            <MotionBox whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }} transition={{ duration: 0.3 }} p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={anneloes} alt="Anneloes" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1}>Anneloes</Heading>
              <Text fontStyle="italic" color="brand.green" fontFamily="heading" mb={2}>Directrice</Text>
              <Text fontFamily="body">is onze directrice en woordvoerder. Daarnaast is zij bezig met het vergroten van onze bekendheid.</Text>
            </MotionBox>
            <MotionBox whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }} transition={{ duration: 0.3 }} p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={bram} alt="Bram" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1}>Bram</Heading>
              <Text fontStyle="italic" color="brand.green" fontFamily="heading" mb={2}>Ontwikkelaar</Text>
              <Text fontFamily="body">Is een van onze twee computergoeroes. Hij ontwikkelt de app, zowel front als backend, voor iOS en Android.</Text>
            </MotionBox>
            <MotionBox whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }} transition={{ duration: 0.3 }} p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={matthijs} alt="Matthijs" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1}>Matthijs</Heading>
              <Text fontStyle="italic" color="brand.green" fontFamily="heading" mb={2}>Ontwikkelaar</Text>
              <Text fontFamily="body">Is onze andere programmeur. Matthijs verzorgt de koppeling tussen de verschillende systemen en databases.</Text>
            </MotionBox>
            <MotionBox whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }} transition={{ duration: 0.3 }} p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={david} alt="David" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1}>David</Heading>
              <Text fontStyle="italic" color="brand.green" fontFamily="heading" mb={2}>Accountant</Text>
              <Text fontFamily="body">regelt de overige zaken, zoals administratie, inkoop en contractvorming.</Text>
            </MotionBox>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box bg="brand.lightBlue" py={20}>
        <Container maxW="1200px">
          <VStack spacing={16}>
            <Heading
              size="xl"
              textAlign="center"
              mb={12}
              color="brand.blue"
            >
              Waarom FairShares?
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <VStack align="start" p={6} bg="white" borderRadius="xl" shadow="md">
                  <Heading size="md" color="brand.blue" mb={4}>
                    Inzicht
                  </Heading>
                  <Text color="gray.600">
                    Krijg direct inzicht in je CO2-uitstoot van dagelijkse activiteiten en aankopen.
                  </Text>
                </VStack>
              </MotionBox>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <VStack align="start" p={6} bg="white" borderRadius="xl" shadow="md">
                  <Heading size="md" color="brand.blue" mb={4}>
                    Compensatie
                  </Heading>
                  <Text color="gray.600">
                    Compenseer eenvoudig je uitstoot door het planten van bomen via gecertificeerde projecten.
                  </Text>
                </VStack>
              </MotionBox>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <VStack align="start" p={6} bg="white" borderRadius="xl" shadow="md">
                  <Heading size="md" color="brand.blue" mb={4}>
                    Impact
                  </Heading>
                  <Text color="gray.600">
                    Maak direct impact met kleine stappen naar een duurzamere toekomst.
                  </Text>
                </VStack>
              </MotionBox>
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Future Section */}
      <Container maxW="1200px" py={20}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={16} alignItems="center">
          <GridItem order={{ base: 2, md: 1 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Text fontSize="lg" color="gray.600">
                In de nabije toekomst willen we FairShares laten groeien tot een gezond bedrijf. We onderzoeken de mogelijkheden om een lokaal herbebossings- of voedselbosproject te ontwikkelen. We reserveren nu al 1% van onze inkomsten om dit doel te realiseren.
              </Text>
            </MotionBox>
          </GridItem>
          <GridItem order={{ base: 1, md: 2 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Heading size="lg" mb={6} color="brand.blue">
                De Toekomst
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Op de lange termijn hopen we samen met jou een gezondere en bewustere planeet op te bouwen, waardoor het gebruik van onze app uiteindelijk overbodig wordt.
              </Text>
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 