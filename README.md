# md编辑器
> 一个最简单的实现
``` TSX
import Beeeditor from '@fantufantu/beeeditor'

const Editor = () => {
  return <Beeeditor />
}
```
> 可能你需要读取编辑器的内容
``` TSX
import { useEffect } from 'react'
import Beeeditor from '@fantufantu/beeeditor'
import type { EditorInstance } from '@fantufantu/beeeditor'

const Editor = () => {
  const editor = createRef<EditorInstance>()

  useEffect(() => {
    console.log(JSON.stringify(editor.current?.getEditorState().toJSON()))
  }, [])

  return <Beeeditor ref={editor} />
}
```
