import { useRef, useState } from "react"
import TodoList from './components/TodoList/TodoList'
import { IconAdd, IconConfirm, IconCancel } from '@/components/Icon'
import TodoForm, { TodoFormData, TodoFormRef } from "./components/TodoCard/TodoForm"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import useTodoStore from "./store"
import "./App.scss"
function App() {
  const { getTodoList, addTodo, deleteTodo } = useTodoStore()
  const todoList = getTodoList()
  const [isAdding, setIsAdding] = useState(false)
  const todoFormRef = useRef<TodoFormRef>(null)
  const onAdd = () => {
    setIsAdding(true)
  }

  const onConfirm = () => {
    const formData = todoFormRef.current?.getFormData() // 调用子组件的方法获取表单数据
    if (formData) {
      for (const key in formData) {
        if (!formData[key as keyof TodoFormData]) {
          alert('请填写所有字段')
          return
        }
      }
      addTodo({
        ...formData,
        priority: `P${formData.priority}`
      }) // 在父组件中添加待办事项
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
        <TodoList todoList={todoList} deleteTodo={deleteTodo}>
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
