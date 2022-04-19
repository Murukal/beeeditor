// react
import React, { forwardRef } from 'react'
// third
import LexicalComposer from '@lexical/react/LexicalComposer'
import ContentEditable from '@lexical/react/LexicalContentEditable'

import RichTextPlugin from '@lexical/react/LexicalRichTextPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import AutoFocusPlugin from '@lexical/react/LexicalAutoFocusPlugin'
import LinkPlugin from '@lexical/react/LexicalLinkPlugin'
import ListPlugin from '@lexical/react/LexicalListPlugin'
import LexicalMarkdownShortcutPlugin from '@lexical/react/LexicalMarkdownShortcutPlugin'
import LexicalOnChangePlugin from '@lexical/react/LexicalOnChangePlugin'

import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { ListItemNode, ListNode } from '@lexical/list'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'

// project
import GetStartPlugin from './plugins/GetStartPlugin'
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import { theme } from '.'
import './styles.css'
import type { EditorInstance, Props } from '../../types/beeeditor'

const Editor = forwardRef<EditorInstance, Props>((props, ref) => {
  const editorConfig = {
    theme,
    onError(error: Error) {
      throw error
    },
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode
    ]
  }

  const onChange = () => {}

  return (
    <LexicalComposer initialConfig={editorConfig as any}>
      <>{props.children}</>
      <RichTextPlugin contentEditable={<ContentEditable className='beeeditor-input' />} placeholder={null} />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <ListPlugin />
      <LinkPlugin />
      <LexicalMarkdownShortcutPlugin />
      <LexicalOnChangePlugin onChange={onChange} />
      <GetStartPlugin defaultValue={props.defaultValue} ref={ref} />
      <CodeHighlightPlugin />
    </LexicalComposer>
  )
})

export default Editor
