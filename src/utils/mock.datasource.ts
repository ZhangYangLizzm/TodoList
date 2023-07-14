import { TodoCardProps } from "@/types";

export function initMockData() {
  const mockData: TodoCardProps[] = [
    {
      title: "任务1",
      content: "这是任务1的内容",
      priority: "p1",
      tags: [
        "tag1",
        "tag2"
      ],
    },
    {
      title: "任务2",
      content: "这是任务2的内容",
      priority: "p2",
      tags: [
        "tag1",
        "tag2"
      ],
    },
    {
      title: "任务3",
      content: "这是任务3的内容",
      priority: "p3",
      tags: [
        "tag1",
        "tag2"],
    },
  ];
  return mockData;
}
