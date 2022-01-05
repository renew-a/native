import { DefaultTheme } from 'react-native-paper'

console.log('DefaultTheme', DefaultTheme)
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#1cb0f6',
    secondary: '#e5e5e5',
    error: '#f13a59',
  },
}
