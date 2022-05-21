import { NativeBaseProvider } from 'native-base'
import React from 'react'
import theme from '../theme/theme'

type Props = {
  children: React.ReactNode
}

export default function AppContainer({children}: Props) {
  return (
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
  )
}