import useLocalStorage from '@/hooks/useLocalStorage';
import { initMockData } from '@/utils/mock.datasource';
import { TodoCardProps } from '@/types';
const useTodoStore = () => {
    const [mockData, setMockData] = useLocalStorage<TodoCardProps[]>('todolist', initMockData())

    const getTodoList = () => {
        return mockData
    }

    const addTodo = (todo: TodoCardProps) => {
        setMockData([...mockData, todo])
    }

    return { getTodoList, addTodo }
}

export default useTodoStore