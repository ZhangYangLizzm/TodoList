import "./App.scss"
import TodoList from './components/TodoList/TodoList'
import { IconAdd, IconConfirm, IconCancel } from '@/components/Icon'

import Header from "./layout/Header"
import Footer from "./layout/Footer"
import { useState } from "react"
import useTodoStore from "./store"
function App() {
  const { getTodoList, addTodo } = useTodoStore()
  const [isAdding, setIsAdding] = useState(false)
  const onAdd = () => {
    setIsAdding(true)
  }
  const onConfirm = () => {
    // setMockData([...mockData, {
    //   title: "任务3",
    //   content: "这是任务3的内容",
    //   tags: [{ type: "success", content: "成功标签3" }],
    // }])
    addTodo({
      title: "任务3",
      content: "这是任务3的内容",
      priority: "p3",
      tags: [
        "tag1",
        "tag2"],
    },)
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
        <TodoList mockData={getTodoList()} />
      </main>
      <Footer>
        {getIcon()}
      </Footer>
    </div>
  )
}

export default App
