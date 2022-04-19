import { EditorThemeClasses } from 'lexical'

export { default } from './Editor'

export interface Props {
  defaultValue?: string
  children?: JSX.Element | JSX.Element[] | null
}

export const theme: EditorThemeClasses = {
  heading: {
    h1: 'beeeditor-heading-h1',
    h2: 'beeeditor-heading-h2',
    h3: 'beeeditor-heading-h3',
    h4: 'beeeditor-heading-h4',
    h5: 'beeeditor-heading-h5'
  },
  code: 'beeeditor-code',
  quote: 'beeeditor-quote',
  list: {
    listitem: 'beeeditor-list-listitem'
  }
}
