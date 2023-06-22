import Image from 'next/image'
import profilePictures from '../image/gif/isagi.gif'
import { Container, Box, chakra } from '@chakra-ui/react'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Gif = () => {
  return (
    <Container>
      <Box>
        <ProfileImage
          src={profilePictures}
          alt="Gif"
          width="500"
          height="200"
        />
      </Box>
    </Container>
  )
}

export default Gif
