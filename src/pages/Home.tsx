import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Grid, GridItem, useColorModeValue, Input, Textarea, FormControl, FormLabel, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import anneloes from '../assets/anneloes.jpg';
import bram from '../assets/bram.jpg';
import matthijs from '../assets/matthijs.jpg';
import david from '../assets/david.jpg';
import { useEffect, useState } from 'react';
import { useAnimation, useMotionValue, useTransform } from 'framer-motion';
import SwirlBackground from '../components/SwirlBackground';
import Footer from '../components/Footer';

const MotionBox = motion(Box);
const AnimatedSwirl = motion(Box);

const useSmoothSwirl = (config: { xAmp: number, yAmp: number, scaleAmp: number, rotAmp: number, duration: number, delay?: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const rotate = useMotionValue(0);
  useEffect(() => {
    let frame: number;
    const start = performance.now();
    function animate(now: number) {
      const t = ((now - start) / 1000) * (2 * Math.PI) / config.duration;
      x.set(Math.sin(t + (config.delay || 0)) * config.xAmp);
      y.set(Math.cos(t * 0.8 + (config.delay || 0)) * config.yAmp);
      scale.set(1 + Math.sin(t * 0.7 + (config.delay || 0)) * config.scaleAmp);
      rotate.set(Math.sin(t * 0.6 + (config.delay || 0)) * config.rotAmp);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [x, y, scale, rotate, config]);
  return { x, y, scale, rotate };
};

const Home = () => {
  const bgGradient = useColorModeValue(
    'linear(to-b, white, brand.lightBlue)',
    'linear(to-b, gray.900, gray.800)'
  );

  // Contact form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

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
           Platform for high-standard carbon offsets. Full transparency. Zero hassle.          
          </Heading>
          <Text fontSize="xl" color="black" mb={6}>
            High-quality, nature-based solutions for measurable climate impact. Simple. Transparent. Effective.
          </Text>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" py={24} bg="white">
        <Container maxW="1200px">
          <Heading size="xl" mb={12} color="brand.blue">Our Services</Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10}>
            <VStack align="start" p={6} bg="brand.lightBlue" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>Carbon Footprint Assessment</Heading>
              <Text color="gray.600">We help you understand your company's carbon emissions and identify reduction opportunities.</Text>
            </VStack>
            <VStack align="start" p={6} bg="brand.lightBlue" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>Offsetting & Projects</Heading>
              <Text color="gray.600">Offset your emissions with certified, high-impact projects from Plan Vivo and other trusted partners.</Text>
            </VStack>
            <VStack align="start" p={6} bg="brand.lightBlue" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>Carbon Market Advice</Heading>
              <Text color="gray.600">Expert guidance on carbon markets, compliance, and sustainability strategy for your business.</Text>
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* Why FairShares Section */}
      <Box id="why" py={24} bg="brand.lightBlue">
        <Container maxW="1200px">
          <Heading size="xl" mb={12} color="brand.blue">Why FairShares?</Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10}>
            <VStack align="start" p={6} bg="white" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>Trusted Projects</Heading>
              <Text color="gray.600">We work exclusively with high-quality, independently certified projects for real, lasting impact.</Text>
            </VStack>
            <VStack align="start" p={6} bg="white" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>Transparent & Local</Heading>
              <Text color="gray.600">Dutch expertise, clear reporting, and full transparency at every step.</Text>
            </VStack>
            <VStack align="start" p={6} bg="white" borderRadius="xl">
              <Heading size="md" color="brand.blue" mb={2}>Verified by S&P Global</Heading>
              <Text color="gray.600">
                Our projects are registered in the <Link href="https://www.spglobal.com/esg/solutions/environmental-registry/" color="black" _hover={{ color: 'brand.blue' }} target="_blank" rel="noopener noreferrer">S&amp;P Global Environmental Registry</Link> for maximum transparency and credibility.
              </Text>
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" py={24} bg="white">
        <Container maxW="1200px">
          <Heading size="xl" mb={12} color="brand.blue">About Us</Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            FairShares is a team of climate and sustainability experts dedicated to helping Dutch businesses achieve their climate goals. Our mission is to make carbon offsetting and sustainability accessible, transparent, and impactful for every company.
          </Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={10}>
            <VStack p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={david} alt="David" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1} color="black">David</Heading>
              <Text fontStyle="italic" color="black" fontFamily="heading" mb={2}>Director</Text>
              <Text fontFamily="body">Climate strategy and partnerships.</Text>
            </VStack>
            <VStack p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={anneloes} alt="Anneloes" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1} color="black">Anneloes</Heading>
              <Text fontStyle="italic" color="black" fontFamily="heading" mb={2}>Operations</Text>
              <Text fontFamily="body">Finance and client support.</Text>
            </VStack>
            <VStack p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={bram} alt="Bram" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1} color="black">Bram</Heading>
              <Text fontStyle="italic" color="black" fontFamily="heading" mb={2}>Developer</Text>
              <Text fontFamily="body">Platform and technology lead.</Text>
            </VStack>
            <VStack p={6} bg="brand.lightBlue" borderRadius="2xl" textAlign="center">
              <Image src={matthijs} alt="Matthijs" borderRadius="full" boxSize="120px" objectFit="cover" mx="auto" mb={4} />
              <Heading size="md" fontFamily="heading" mb={1} color="black">Matthijs</Heading>
              <Text fontStyle="italic" color="black" fontFamily="heading" mb={2}>Developer</Text>
              <Text fontFamily="body">Integrations and data systems.</Text>
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" bg="white" py={24}>
        <Container maxW="600px">
          <Heading size="xl" textAlign="center" mb={8} color="brand.blue">
            Contact
          </Heading>
          <VStack spacing={6} align="center">
            <Text fontSize="lg" color="gray.700" textAlign="center">
              For business inquiries, please email us at
              <br />
              <Link href="mailto:info@fairsharesapp.com" color="gray.600" _hover={{ color: 'brand.blue' }}>
                info@fairsharesapp.com
              </Link>
            </Text>
            <Text fontSize="lg" color="gray.700" textAlign="center">
              Or visit our office at
              <br />
              <Link href="https://www.google.com/maps/dir/51.8257131,5.9212977/Wilhelminasingel+4,+6524+AK+Nijmegen,+Netherlands/@51.8334262,5.8506781,13z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x47c7085b7a21002b:0xaf4d7a46cfa46959!2m2!1d5.8627602!2d51.841547!3e1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" color="gray.600" _hover={{ color: 'brand.blue' }} target="_blank" rel="noopener noreferrer">
                Wilhelminasingel 4, 6524 AK, Nijmegen
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