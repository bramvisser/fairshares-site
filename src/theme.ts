import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      blue: '#00BCD4', // Dart Colors.cyan.shade500
      green: '#689F38', // Dart Colors.lightGreen.shade700
      lightBlue: '#E6F0FF', // Light blue background
    },
  },
  fonts: {
    heading: 'Montserrat Alternates, sans-serif',
    body: 'Nunito, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.blue',
          color: 'white',
          _hover: {
            bg: 'blue.600',
          },
        },
        outline: {
          borderColor: 'brand.blue',
          color: 'brand.blue',
        },
      },
    },
  },
})

export default theme 