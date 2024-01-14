const initialData = [
  {
    id: Date.now(),
    name: "Йога",
    time: "19:00",
    maxMemmebrs: 20,
    currentMemmebrs: 17
  },
  {
    id: Date.now() + 1,
    name: "Пилатес",
    time: "16:00",
    maxMemmebrs: 15,
    currentMemmebrs: 15
  },  
  {
    id: Date.now() + 2,
    name: "Бассейн",
    time: "12:00",
    maxMemmebrs: 40,
    currentMemmebrs: 24
  },   
  {
    id: Date.now() + 3,
    name: "Фитнес",
    time: "17:00",
    maxMemmebrs: 25,
    currentMemmebrs: 21
  },    
  {
    id: Date.now() + 4,
    name: "Бачата",
    time: "20:00",
    maxMemmebrs: 10,
    currentMemmebrs: 8
  },    
]

const contentEl = document.querySelector(".content");

function scheduleList() {
    let contentHtml = "";
    for (const train of initialData)  {
      
      const trainEl = document.createElement("div"); 
      trainEl.setAttribute("id", train.id);
      contentEl.appendChild(trainEl);
      
      const nameEl = document.createElement("h2");
      nameEl.innerText = `${train.name}`;
      trainEl.appendChild(nameEl);

      const timeEl = document.createElement("h4");
      timeEl.innerText = `${train.time}`;
      trainEl.appendChild(timeEl);   
      
      const maxMemmebrsEl = document.createElement("p");
      maxMemmebrsEl.innerText = `Всего  мест: ${train.maxMemmebrs}`;
      trainEl.appendChild(maxMemmebrsEl);    
      
      const currentMemmebrsEl = document.createElement("p");
      currentMemmebrsEl.innerText = `Занято мест: ${train.currentMemmebrs}`;
      trainEl.appendChild(currentMemmebrsEl);    
      
      const signEl = document.createElement("button");
      signEl.innerText = `Записаться`;
      trainEl.appendChild(signEl);       
      
      if (train.currentMemmebrs >= train.maxMemmebrs) {
        signEl.setAttribute("disabled", "true");
      }

      // Запись на занятие
      signEl.addEventListener("click", () => {
        let id = trainEl.getAttribute("id");

        const trainRec = initialData.find((el) => {
          return el.id == id;
        }) || null;
        
        if (trainRec) {
            if (trainRec.currentMemmebrs < trainRec.maxMemmebrs) {
              trainRec.currentMemmebrs++;
              currentMemmebrsEl.innerText = `Занято мест: ${train.currentMemmebrs}`;
              
              if (train.currentMemmebrs === train.maxMemmebrs) {
                signEl.setAttribute("disabled", "true");
              }              
            }
        }
      })
    }
}

scheduleList();