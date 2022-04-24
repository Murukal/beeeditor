import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useEffect } from 'react'
import { CodeNode } from '@lexical/code'

const CodeLanguagePlugin = () => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    editor.registerMutationListener(CodeNode, (mutations) => {
      console.log('mutations===', mutations)
    })
  }, [])

  return null
}

export default CodeLanguagePlugin
