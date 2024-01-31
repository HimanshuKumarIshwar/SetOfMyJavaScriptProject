const data = [
  {
    id: 1,
    title: "This accordian Title",
    content: "This content of accordian item1 ",
  },

  {
    id: 1,
    title: "This accordian Title",
    content: "This content of accordian item2 ",
  },
  {
    id: 1,
    title: "This accordian Title",
    content: "This content of accordian ite3 ",
  },
  {
    id: 1,
    title: "This accordian Title",
    content: "This content of accordian item4 ",
  },
];

const accordionWrapper = document.querySelector(".accordion");
function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (dataItem) => `
    <div class = "accordion_item">
    <div class = "accordion_title">
    <h3>${dataItem.title}</h3>
    <i class = "fa-solid fa-arrow-down"></i>
    </div>
    <div class = "accordian_content">
       <p> ${dataItem.content}</p>
       </div>
    </div>
   

    `
    )
    .join(" ");
}
createAccordionData();


const getAccordionTitles = document.querySelectorAll('.accordion_title');
console.log(getAccordionTitles)

getAccordionTitles.forEach(currentItem=> {
   currentItem.addEventListener('click', (event)=> {
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active')
        }else {
             let getAlreadyAddedActiveClasses = document.querySelectorAll('.active') 
              getAlreadyAddedActiveClasses.forEach(currentActiveItem =>{
                currentActiveItem.classList.remove('active')
              })
              currentItem.classList.add('active')
        }
   })
})