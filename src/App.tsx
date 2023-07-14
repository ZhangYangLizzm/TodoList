import "./App.scss"
import TodoList from './components/TodoList/TodoList'
import { IconAdd, IconConfirm, IconCancel } from '@/components/Icon'

import Header from "./layout/Header"
import Footer from "./layout/Footer"
import { useRef, useState } from "react"
import useTodoStore from "./store"
import TodoForm, { TodoFormRef } from "./components/TodoCard/TodoForm"
function App() {
  const { mockData, addTodo, deleteTodo } = useTodoStore()
  const [isAdding, setIsAdding] = useState(false)
  const todoFormRef = useRef<TodoFormRef>(null)
  const onAdd = () => {
    setIsAdding(true)
  }

  const onConfirm = () => {
    const formData = todoFormRef.current?.getFormData() // 调用子组件的方法获取表单数据
    if (formData) {
      addTodo(formData) // 在父组件中添加待办事项
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
        <TodoList mockData={mockData} deleteTodo={deleteTodo}>
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
