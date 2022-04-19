import type { EditorState } from 'lexical'
import type { ForwardRefExoticComponent, PropsWithoutRef, ReactElement, RefAttributes } from 'react'

export interface Props {
  defaultValue?: string
  children?: JSX.Element | JSX.Element[] | null
}

export interface EditorInstance {
  getEditorState: () => EditorState
}

declare const Beeeditor = (
  props: Props & {
    ref: Ref<EditorInstance>
  }
) => ReactElement

declare module '@fantufantu/beeeditor' {
  export default Beeeditor
}
