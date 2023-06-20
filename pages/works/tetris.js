import NextLink from 'next/link'
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Button
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => {
  return (
    <Layout title="Tetris">
      <Container>
        <Title>
          Tetris <Badge>2023</Badge>
        </Title>
        <P>
          A Tetris Game made a the school using the{' '}
          <Link href="https://www.python.org/">Python</Link> language and{' '}
          <Link href="https://www.pygame.org/news">Pygame</Link> for the GUI
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.python.org/">
              https://www.python.org/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Dwikso/Tetris">
              https://github.com/Dwikso/Tetris <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>STACK</Meta>
            <span>Python, PyGame</span>
          </ListItem>
        </List>
        <Box my={6} align="center">
          <Button as={NextLink} href="/" colorScheme="teal">
            Return to Home
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
