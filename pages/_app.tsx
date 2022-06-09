import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import '@fontsource/inter/variable.css'

function MyApp({ Component, pageProps }: AppProps) {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.blue },
    },
    theme,
  )
  return(
    <ChakraProvider theme={myTheme}>
    <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
