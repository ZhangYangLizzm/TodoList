import { useState } from 'react'
import "./App.scss"
import TodoList from './components/TodoList/TodoList'
import { initMockData } from './mock.datasource'
import addIcon from './assets/Add.png'
import useDebounce from './utils/useDebounce'
import useLocalStorage from './utils/useLocalStorage'
function App() {
  const [mockData, setMockData] = useLocalStorage('todolist', initMockData())

  const onAdd = () => {
    setMockData([...mockData, {
      title: "任务3",
      content: "这是任务3的内容",
      tags: [{ type: "success", content: "成功标签3" }],
    }])
  }
  return (
    <div className='app'>
      <div className='app-header-mask' />
      <h1 className='app-title'>Daily Todo</h1>
      <TodoList mockData={mockData} />
      <div className='todo-add'>
        <img src={addIcon} alt="" onClick={useDebounce(onAdd, 200)} />
      </div>
    </div>
  )
}

export default App
