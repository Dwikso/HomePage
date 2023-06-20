import NextLink from 'next/link'
import { Heading, Box, Link, Badge } from '@chakra-ui/react'
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import useTranslation from 'next-translate/useTranslation'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/work">
      Works
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
