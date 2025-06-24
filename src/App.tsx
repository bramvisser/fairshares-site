import { ChakraProvider, Box } from '@chakra-ui/react'
import theme from './theme'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="gray.50">
        {location.pathname !== '/privacy' && location.pathname !== '/terms' && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Box>
    </ChakraProvider>
  )
}

export default App
