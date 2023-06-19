import { Container, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import Section from '../components/section'

const Skills = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default Skills
