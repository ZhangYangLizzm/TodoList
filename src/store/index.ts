import useLocalStorage from '@/hooks/useLocalStorage';
import { initMockData } from '@/utils/mock.datasource';
import { TodoCardProps } from '@/types';
const useTodoStore = () => {
    const [mockData, setMockData] = useLocalStorage<TodoCardProps[]>('todolist', initMockData())

    const addTodo = (todo: TodoCardProps) => {
        setMockData([...mockData, todo])
    }

    const deleteTodo = (index: number) => {
        setMockData((prevMockData) => {
            const updatedTodoList = [...prevMockData];
            updatedTodoList.splice(index, 1);
            return updatedTodoList;
        });
    };

    return { mockData, addTodo, deleteTodo }
}

export default useTodoStore