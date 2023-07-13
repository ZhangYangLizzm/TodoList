export function initMockData() {
  const mockData = [
    {
      title: "任务1",
      content: "这是任务1的内容",
      tags: [
        { type: "error", content: "错误标签1" },
        { type: "success", content: "成功标签1" },
      ],
    },
    {
      title: "任务2",
      content: "这是任务2的内容",
      tags: [
        { type: "error", content: "错误标签2" },
        { type: "success", content: "成功标签2" },
        { type: "error", content: "错误标签3" },
      ],
    },
    {
      title: "任务3",
      content: "这是任务3的内容",
      tags: [{ type: "success", content: "成功标签3" }],
    },
  ];
  return mockData;
}
