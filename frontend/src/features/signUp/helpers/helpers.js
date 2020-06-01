export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const createNums = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
export const days = createNums(1, 31);
export const years = createNums(1900, 2020).reverse();

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "unset",
    padding: "unset",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(21, 32, 43)",
    minHeight: "400px",
    borderRadius: "14px 14px 14px 14px",
    maxWidth: "80vw",
    maxHeight: "90vh",
    height: "650px",
    minWidth: " 600px",
    flexShrink: "1",
  },
  overlay: {
    backgroundColor: "rgba(110, 118, 125, 0.4)",
  },
};
