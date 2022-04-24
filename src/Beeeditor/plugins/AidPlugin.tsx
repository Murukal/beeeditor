import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useCallback, useEffect, useState } from 'react'
import React from 'react'
import { CodeNode } from '@lexical/code'
import { $getNodeByKey, $getSelection, SELECTION_CHANGE_COMMAND } from 'lexical'

const AidPlugin = () => {
  const [editor] = useLexicalComposerContext()
  const [top, setTop] = useState(100)
  const [left, setLeft] = useState(200)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    editor.registerMutationListener(CodeNode, (mutations) => {
      for (const [key, type] of mutations) {
        // 创建时注册事件
        if (type !== 'created') return

        const element = editor.getElementByKey(key)

        element?.addEventListener('mousemove', (e) => {
          // 类型断言
          const target = e.target as unknown as
            | {
                clientWidth: number
                clientHeight: number
              }
            | undefined

          // 移动到语言区域，展示下拉
          if (target && e.offsetX > target.clientWidth - 80 && e.offsetY < 30) {
            setIsShow(true)
            setTop(target.clientHeight)
            setLeft(target.clientWidth)
          } else {
            setIsShow(false)
          }
        })

        // 鼠标移开，不显示
        element?.addEventListener('mouseleave', () => {
          setIsShow(false)
        })
      }
    })
  }, [])

  return (
    <div
      style={{
        display: isShow ? 'unset' : 'none',
        position: 'fixed',
        top,
        left,
        width: '10px',
        height: '10px',
        backgroundColor: 'black'
      }}
    ></div>
  )
}

export default AidPlugin
