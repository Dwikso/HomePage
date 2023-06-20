import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import useTranslation from 'next-translate/useTranslation'
import { HiTranslate } from 'react-icons/hi'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { t } = useTranslation('common')
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            Quentin
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/work" path={path}>
            {t('works')}
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/Dwikso"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
          <LinkItem target="_blank" href="/skills" path={path}>
            Skills
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HiTranslate />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/" locale="fr">
                  FR
                </MenuItem>
                <MenuItem as={MenuLink} href="/" locale="en">
                  ENG
                </MenuItem>
              </MenuList>
            </Menu>
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <MenuItem as={MenuLink} href="/">
                    {t('about')}
                  </MenuItem>
                  <MenuItem as={MenuLink} href="/work">
                    {t('works')}
                  </MenuItem>

                  <MenuItem as={Link} href="/skills">
                    Skills
                  </MenuItem>

                  <MenuItem as={Link} href="https://github.com/Dwikso">
                    <IoLogoGithub />
                    Github
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
