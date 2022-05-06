import { EditorThemeClasses } from 'lexical'

export { default } from './Editor'

export interface ThemeOptions {
  isReadonly?: boolean
}

export const getTheme = (options: ThemeOptions): EditorThemeClasses => ({
  heading: {
    h1: 'beeeditor-heading-h1',
    h2: 'beeeditor-heading-h2',
    h3: 'beeeditor-heading-h3',
    h4: 'beeeditor-heading-h4',
    h5: 'beeeditor-heading-h5'
  },
  code: `beeeditor-code${options.isReadonly ? ' beeeditor-code-readonly' : ''}`,
  quote: 'beeeditor-quote',
  list: {
    listitem: 'beeeditor-list-listitem'
  }
})
