import { useRef, useState } from "react"
import TodoList from './components/TodoList'
import { IconAdd, IconConfirm, IconCancel } from '@/components/Icon'
import TodoForm, { TodoFormRef } from "@/components/TodoList/components/Form"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import "./App.scss"
import { addTodo } from "./store/todoSlice"
import { useAppDispatch } from "./store/storehook"
function App() {
  const dispatch = useAppDispatch()
  const [isAdding, setIsAdding] = useState(false)
  const todoFormRef = useRef<TodoFormRef>(null)
  const onAdd = () => {
    setIsAdding(true)
  }
  const onConfirm = () => {
    const formData = todoFormRef.current?.getFormData() // 调用子组件的方法获取表单数据
    if (formData) {
      dispatch(addTodo({
        ...formData,
        priority: `P${formData.priority}`,
        createdTime: new Date().toLocaleDateString()
      })) // 在父组件中添加待办事项
    }
    setIsAdding(false)
  }

  const onCancel = () => {
    setIsAdding(false)
  }

  const getIcon = () => {
    if (isAdding) {
      return (
        <>
          <IconCancel onClick={onCancel} />
          <IconConfirm onClick={onConfirm} />
        </>
      )
    }
    return <IconAdd onClick={onAdd} />
  }

  return (
    <div className='app'>
      <Header />
      <main className="app-main">
        <h1 className='app-main-title'>Daily Todo</h1>
        <TodoList  >
          {isAdding ? <TodoForm ref={todoFormRef} /> : null}
        </TodoList>
      </main>
      <Footer>
        {getIcon()}
      </Footer>
    </div>
  )
}

export default App
