import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Link,
  List,
  ListItem,
  Button,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { BioSection, BioYear } from '../components/bio.js'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import profilePictures from '../image/pp.jpg'
import BIRDS from 'vanta/dist/vanta.birds.min.js'
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
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
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        mt={8}
        align="center"
      >
        Hello, I&apos;m a Web Developer based in France !
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box display flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Quentin - Dwikso
          </Heading>
          <p> ( Developer / Students )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <ProfileImage
            src={profilePictures}
            alt="Profile Pictures"
            borderRadius="full"
            width="100"
            height="100"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Introduction
        </Heading>
        <Paragraph>
          Hello, I introduce myself I am Quentin student in first year of
          computer science in a university in France. I am in learning of
          multiple programming languages, frameworks and everything related to
          the web domain. I aspire to become a software engineer because it s a
          job that I love and that interests me.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/work"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Works
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Born in France .
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Obtaining my baccalaureate at Louis-Pasteur high School in
          Hénin-Beaumont in France, with the specialties
          Digital-Science-Computer Science (NSI) and Engineering Science (SI)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>
          {' '}
          <Link href="https://open.spotify.com/playlist/3d5KE5nlaCJ90cpjd59lap?si=e13b919b29ca498f">
            Music
          </Link>
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Dwikso" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Dwikso
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Dwikso_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @Dwikso_
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}

export default Home
