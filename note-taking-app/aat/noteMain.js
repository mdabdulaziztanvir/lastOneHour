const generateTextarea = document.getElementById("generate-textarea");
const containerGrid = document.getElementById("containerGrid");
let count = 0;
let textAreaArray = [];
// let arrayOfObject = {};
generateTextarea.addEventListener("click", (e) => {
  e.preventDefault();
  count++;

  const createdTextArea = document.createElement("textarea");

  createdTextArea.classList.add("createdTextAreaClass");
  containerGrid.prepend(createdTextArea);

  // checking if the setitem is empty
  const prevData = localStorage.getItem("savedData");
  const parsed = JSON.parse(prevData);
  // console.log(parsed[0].id);

  if (parsed.length === 0) {
    console.log("empty array");
    console.log(parsed);
  } else if (parsed) {
    console.log("you have previos data");
  } else {
    console.log("you do not have previous data");
  }

  let arrayOfObject = {
    id: count,
    value: "",
  };
  textAreaArray.push(arrayOfObject);

  localStorage.setItem("savedData", JSON.stringify(textAreaArray));

  createdTextArea.addEventListener("input", (e) => {
    e.preventDefault();

    const TextAreaValue = createdTextArea.value;

    const index = textAreaArray.findIndex(
      (textAreaArrayIndex) => textAreaArrayIndex.id === arrayOfObject.id,
    );

    if (index !== -1) {
      // -1 means it does not find
      textAreaArray[index].value = TextAreaValue;
    } else {
      textAreaArray.push(arrayOfObject);
    }

    localStorage.setItem("savedData", JSON.stringify(textAreaArray));
  });
});
window.onload = (e) => {
  const getSavedData = localStorage.getItem("savedData");
  const parsedData = JSON.parse(getSavedData) || [];

  if (parsedData.length === 0) {
    console.log("empty array");
    console.log(parsedData);
  } else if (parsedData) {
    console.log("you have previos data");
  } else {
    console.log("you do not have previous data");
  }

  for (let i = 0; i < parsedData.length; i++) {
    const createdTextArea = document.createElement("textarea");
    createdTextArea.classList.add("createdTextAreaClass");

    createdTextArea.value = parsedData[i].value;
    containerGrid.prepend(createdTextArea);
    createdTextArea.addEventListener("dblclick", (e) => {
      // console.log("double click");
      parsedData.splice(i, 1);
      localStorage.setItem("savedData", JSON.stringify(parsedData));
      createdTextArea.remove();
    });
  }
};
const myArray = [
  { id: 1, value: "one" },
  { id: 2, value: "one" },
  { id: 3, value: "one" },
  { id: 4, value: "one" },
  { id: 5, value: "one" },
  { id: 6, value: "one" },
  { id: 7, value: "one" },
  { id: 8, value: "one" },
  { id: 9, value: "one" },
  { id: 10, value: "one" },
  { id: 11, value: "one" },
  { id: 12, value: "one" },
  { id: 13, value: "one" },
];

const fndIndexArray = myArray.findIndex(checkMyArray);

function checkMyArray(aaa) {
  return aaa.id === 0;
}
// console.log(fndIndexArray);
