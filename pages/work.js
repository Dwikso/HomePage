import { Container, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import picturesprofile from '../image/works/Tetris.jpeg'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={3}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tetris" title="tetris" thumbnail={picturesprofile}>
            A Tetris Game made a the school using the{' '}
            <Link href="https://www.python.org/">Python</Link> language and{' '}
            <Link href="https://www.pygame.org/news">Pygame</Link> for the GUI
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
