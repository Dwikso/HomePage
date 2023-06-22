import NextLink from 'next/link'
import {
  Container,
  Heading,
  SimpleGrid,
  Link,
  Box,
  Button,
  chakra
} from '@chakra-ui/react'
import Section from '../components/section'
import BIRDS from 'vanta/dist/vanta.birds.min.js'
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'
import useTranslation from 'next-translate/useTranslation'
import Gif from '../components/gif'
import pythonPictures from '../image/logo/Python.png'
import javascriptpictures from '../image/logo/JavaScript.png'
import haskellpictures from '../image/logo/Haskell.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Skills = () => {
  const { t } = useTranslation('common')
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
      <Gif />
      <Heading mt={10} as="h3" fontSize={20} mb={3}>
        Skills
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Link href="https://www.python.org/">
            Python
            <ProfileImage
              src={pythonPictures}
              alt="python"
              width="20"
              height="20"
            />
          </Link>
        </Section>
        <Section>
          <Link href="https://www.haskell.org">
            Haskell
            <ProfileImage
              src={haskellpictures}
              alt="JavaScript"
              width="20"
              height="20"
            />
          </Link>
        </Section>
        <Section>
          <Link>
            <Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
              JavaScript
              <ProfileImage
                src={javascriptpictures}
                alt="JavaScript"
                width="20"
                height="20"
              />
            </Link>
          </Link>
        </Section>
      </SimpleGrid>
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          {t('home')}
        </Button>
      </Box>
    </Container>
  )
}

export default Skills
