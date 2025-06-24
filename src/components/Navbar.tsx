import { Box, Flex, Link, Button, Text, Image, HStack } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import nlFlag from '../assets/nl-flag.svg'
import ukFlag from '../assets/uk-flag.svg'

const sections = [
  { id: 'hero', label: 'navbar_home' },
  { id: 'services', label: 'navbar_services' },
  { id: 'why', label: 'navbar_why' },
  { id: 'about', label: 'navbar_about' },
]

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 80
      let current = 'hero'
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el && el.offsetTop <= scrollPos) {
          current = section.id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Box bg="white" px={4} boxShadow="sm" position="sticky" top={0} zIndex={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        <HStack spacing={3} align="center">
          <Image src={logo} alt="FairShares Logo" h="56px" />
          <Text fontWeight="bold" color="brand.blue" fontFamily="heading" fontSize={{ base: '2xl', md: '3xl' }}>
            {t('footer_brand')}
          </Text>
        </HStack>
        <HStack as="nav" spacing={10}>
          {sections.map((section) => (
            <Link
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              color={active === section.id ? 'brand.blue' : 'gray.600'}
              fontWeight={active === section.id ? 'bold' : 'semibold'}
              fontSize={{ base: 'lg', md: 'xl' }}
              px={3}
              py={2}
              borderBottom={active === section.id ? '2px solid' : '2px solid transparent'}
              borderColor={active === section.id ? 'brand.blue' : 'transparent'}
              transition="all 0.2s"
              _hover={{ color: 'brand.blue', textDecoration: 'none' }}
              cursor="pointer"
              fontFamily="heading"
            >
              {t(section.label)}
            </Link>
          ))}
        </HStack>
        <HStack spacing={4}>
          <Button
            bg="brand.blue"
            color="white"
            size="md"
            onClick={() => scrollToSection('contact')}
            _hover={{
              bg: 'brand.blue',
              transform: 'scale(1.05)',
              borderColor: 'transparent'
            }}
            transition="all 0.2s"
          >
            {t('navbar_contact')}
          </Button>
          <Box
            as="button"
            onClick={() => changeLanguage(i18n.language === 'nl' ? 'en' : 'nl')}
            _hover={{
              bg: 'transparent',
              borderColor: 'transparent'
            }}
            aria-label="Switch language"
          >
            {i18n.language === 'nl' ? (
              <Image src={nlFlag} alt="Dutch Flag" w="32px" />
            ) : (
              <Image src={ukFlag} alt="UK Flag" w="32px" />
            )}
          </Box>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar 