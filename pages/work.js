import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


import tetris from '../image/works/tetris'

const Works = () => (
  <Layout title="Woks">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Tetris" title="Tetris" thumbnail={tetris}>
A Tetris Game to do at school in python            
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container
  </Layout>
)

export default Works
