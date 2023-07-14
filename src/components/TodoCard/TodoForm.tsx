import { useState, ChangeEvent, forwardRef, useImperativeHandle, Ref } from 'react';
import './TodoFrom.scss';

interface TodoFormData {
  title: string;
  content: string;
  tag: string;
  priority: string;
}
export interface TodoFormRef {
  getFormData(): TodoFormData
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TodoForm = forwardRef((_, ref: Ref<TodoFormRef>) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const [priority, setPriority] = useState('');

  const getFormData = () => {
    return {
      title,
      content,
      tag,
      priority: `P${priority}`,
    }
  }
  useImperativeHandle(ref, () => ({
    getFormData
  }))

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const handlePriorityChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, priorityOption: string) => {
    e.preventDefault()
    setPriority(priorityOption);
  };

  return (
    <form className='todo-form'>
      <input
        type="text"
        placeholder='Take dog out on walk'
        id="title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        id="content"
        placeholder='He needs vaccine shot too'
        value={content}
        onChange={handleContentChange}
      ></textarea>
      <input
        type="text"
        placeholder='Tags'
        id="tags"
        value={tag}
        onChange={handleTagsChange}
      />
      <div className='priority-button-group' >
        {['1', '2', '3', '4'].map((priorityOption) => (
          <button
            key={priorityOption}
            className={priority === priorityOption ? 'active' : ''}
            onClick={(e) => handlePriorityChange(e, priorityOption)}
          >
            {priorityOption}
          </button>
        ))}
      </div>
    </form>
  );
})

export default TodoForm;
