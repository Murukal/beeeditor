import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { forwardRef, useEffect, useImperativeHandle } from 'react'
import type { EditorInstance } from '../../../types/beeeditor'

interface Props {
  defaultValue?: string
}

const GetStartPlugin = forwardRef<EditorInstance, Props>((props, ref) => {
  const [editor] = useLexicalComposerContext()

  /**
   * ref事件
   */
  useImperativeHandle<EditorInstance, EditorInstance>(
    ref,
    () => ({
      getEditorState: () => {
        return editor.getEditorState()
      }
    }),
    [editor]
  )

  useEffect(() => {
    try {
      props.defaultValue && editor.setEditorState(editor.parseEditorState(props.defaultValue))
    } catch (error) {
      console.error(error)
    }
  }, [editor, props.defaultValue])

  return null
})

export default GetStartPlugin
