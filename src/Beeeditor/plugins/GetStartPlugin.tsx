import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useEffect } from 'react'

interface Props {
  defaultValue?: string
}

const GetStartPlugin = (props: Props) => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    try {
      props.defaultValue && editor.setEditorState(editor.parseEditorState(props.defaultValue))
    } catch (error) {
      console.error(error)
    }
  }, [editor, props.defaultValue])

  return null
}

export default GetStartPlugin
