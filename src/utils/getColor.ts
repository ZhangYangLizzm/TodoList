const getColor = (type: "priority"|"tag") => {
  let bgColor, fontColor;
  if (type === "priority") {
    bgColor = "#FEF2F2";
    fontColor = "#E11D48";
  } else if (type === "tag") {
    bgColor = "#F0FDF4";
    fontColor = "#16A34A";
  }
  return { bgColor, fontColor };
};

export default getColor;
