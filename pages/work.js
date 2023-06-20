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
import { WorkGridItem } from '../components/grid-item'
import picturesprofile from '../image/works/Tetris.jpeg'
import BIRDS from 'vanta/dist/vanta.birds.min.js'
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'
import useTranslation from 'next-translate/useTranslation'

const Works = () => {
  const { t } = useTranslation('common')

  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
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
        {t('works')}
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tetris" title="Tetris" thumbnail={picturesprofile}>
            {t('tetris-intro')}{' '}
            <Link href="https://www.python.org/">Python</Link>
          </WorkGridItem>
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

export default Works
