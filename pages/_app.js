import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main'
import Fonts from '../components/fonts.js'
import theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
