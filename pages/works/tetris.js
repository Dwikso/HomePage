import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => {
  return (
    <Layout title="Tetris">
      <Container>
        <Title>
          Tetris <Badge>2023</Badge>
        </Title>
        <P>A Game to do at school in Python</P>
      </Container>
    </Layout>
  )
}

export default Work
