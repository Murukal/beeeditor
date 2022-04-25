import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import React, { useEffect, useMemo, useState } from 'react'
import { CodeNode, getCodeLanguages } from '@lexical/code'
import { $getNodeByKey } from 'lexical'

const CodeLanguagePlugin = () => {
  const [editor] = useLexicalComposerContext()
  const [top, setTop] = useState(100)
  const [left, setLeft] = useState(200)
  const [isShow, setIsShow] = useState(false)
  const [node, setNode] = useState<CodeNode>()

  const languages = useMemo(() => getCodeLanguages(), [])

  // 只读模式下，当前插件不生效
  if (editor.isReadOnly()) return null

  useEffect(() => {
    editor.registerMutationListener(CodeNode, (mutations) => {
      for (const [key, type] of mutations) {
        // 创建时注册事件
        if (type !== 'created') return

        const element = editor.getElementByKey(key)
        const node = $getNodeByKey(key) as CodeNode

        element?.addEventListener('click', (e) => {
          // 类型断言
          const target = e.target as unknown as {
            clientWidth: number
            clientHeight: number
          }

          setIsShow((isShow) => !isShow)
          setNode(node)
          setTop(e.clientY - e.offsetY + 28)
          setLeft(e.clientX - e.offsetX + target.clientWidth - 88)
          // 组织冒泡
          e.stopPropagation()
        })

        // 鼠标移开，不显示
        document?.addEventListener('click', () => {
          setIsShow(false)
        })
      }
    })
  }, [])

  return (
    <div
      className='beeeditor-code-selector'
      style={{
        display: isShow ? 'unset' : 'none',
        top,
        left
      }}
    >
      <ul
        style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0
        }}
      >
        {languages.map((language) => (
          <li
            key={language}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              marginTop: '8px',
              marginBottom: '8px'
            }}
            onClick={() => {
              editor.update(() => {
                node?.setLanguage(language)
              })
            }}
          >
            {language}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CodeLanguagePlugin
