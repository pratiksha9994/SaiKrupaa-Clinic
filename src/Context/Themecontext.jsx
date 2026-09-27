import { createContext, useContext, useEffect, useState } from 'react'

const Themecontext = createContext(null)

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      dark ? 'dark' : 'light'
    )

    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggle = () => {
    setDark(prev => !prev)
  }

  return (
    <Themecontext.Provider value={{ dark, toggle }}>
      {children}
    </Themecontext.Provider>
  )
}

export function useTheme() {
  const Context = useContext(Themecontext)

  if (!Context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }

  return Context
}