import NextLink from 'next/link'
import {
  Container,
  Heading,
  SimpleGrid,
  Link,
  Box,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import BIRDS from 'vanta/dist/vanta.birds.min.js'
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'

const Skills = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundAlpha: 0.0,
          THREE
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <Container ref={vantaRef}>
      <Heading as="h3" fontSize={20} mb={3}>
        Skills
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Link href="https://www.python.org/">Python</Link>
        </Section>
        <Section>
          <Link> Haskell</Link>
        </Section>
        <Section>
          <Link>
            <Link>JavaScript</Link>
          </Link>
        </Section>
      </SimpleGrid>
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to Home
        </Button>
      </Box>
    </Container>
  )
}

export default Skills
