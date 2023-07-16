import { TodoList } from "@/types";

export function initMockData() {
  const createdTime=new Date().toLocaleDateString()
  const mockData: TodoList = [
    {
      title: "任务1",
      content: "这是任务1的内容",
      priority: "P1",
      tags: "Tag1",
      createdTime
    },
    {
      title: "任务2",
      content: "这是任务2的内容",
      priority: "P2",
      tags: "Tag2",
      createdTime
    },
    {
      title: "任务3",
      content: "这是任务3的内容",
      priority: "P3",
      tags: "Tag3",
      createdTime
    },
  ];
  return mockData;
}
