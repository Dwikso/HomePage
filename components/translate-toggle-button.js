import { IconButton } from '@chakra-ui/react'
import { HiTranslate } from 'react-icons/io5'

const TranslateToggleButton = () => {
  return (
    <IconButton
      as={IconButton}
      icon={<HiTranslate />}
      variant="outline"
      aria-label="Options"
    ></IconButton>
  )
}

export default TranslateToggleButton
