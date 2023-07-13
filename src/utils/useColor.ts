const useColor = (type: string) => {
  let bgColor, fontColor;
  if (type === "error") {
    bgColor = "#FEF2F2";
    fontColor = "#E11D48";
  } else if (type === "success") {
    bgColor = "#F0FDF4";
    fontColor = "#16A34A";
  }
  return { bgColor, fontColor };
};

export default useColor;
