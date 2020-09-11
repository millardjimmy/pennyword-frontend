class Flashcard {
    static all = []
    constructor({title, description, image, category, category_id, id}){
      this.title = title
      this.description = description
      this.image = image
      this.category = category
      this.category_id = category_id
     
      this.element = document.createElement('div')
      this.element.id = `flashcard-${id}`
      this.flashcardList = document.getElementById('flashcard-list')
        // this.sortFunction = document.getElementById('sortButton')
        
      this.id = id


      Flashcard.all.push(this)
    }

    // sortFunction = () => {
    //     // let cardArray = document.querySelectorAll("#flashcard-list div")


    // console.log(Category.selectedCatagory)
        

    //     let arr = Flashcard.all.filter(card => card.category_id === Category.selectedCatagory)
    //     console.log(arr)
    //     // sort(function(a,b) {
    //     //         let titleA = a.title.toLowerCase()
    //     //         let titleB = b.title.toLowerCase()
    //     //         if (titleA < titleB) {
    //     //             return -1;
    //     //         }
    //     //         if (titleA > titleB){
    //     //             return 1;
    //     //         }
    //     //         return 0;
    //     //         })
    //     //         Flashcard.all.forEach(
    //     //             card => card.element.remove()
    //     //         )
    //     //  arr.forEach(card => card.attachToDom())
    // //     (flashcard => flashcard.title)
    // //     let larr = arr.map(title => title.toLowerCase())
    // //     let sortedCards = larr.sort() 
    // //   //debugger
    // //     return sortedCards
        
    // }


    attachToDom(){  
        
        this.flashcardList.append(this.fullRender())
        this.addEventListeners()
    }
    
    fullRender(){
        this.element.innerHTML = `
        <li>
        <span id="image-${this.id}" class="image"> <img src="${this.image}" width="100" height="100"> </span>
        <span hidden="true" class="title"> ${this.title} </span>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
         `
         
         return this.element
    }

    addEventListeners(){
        this.element.addEventListener('click', this.handleListClick)
        this.element.addEventListener('click', this.handleImageClick)
        // this.sortButton.addEventListener('click', this.sortFunction)
    }

    
    handleListClick = (e)=>{
        if (e.target.className === "delete"){ 
            let id = e.target.dataset.id
            flashcardsAdapter.deleteFlashcard(id)
            this.element.remove()
        }


    }
    handleImageClick = (e)=> {
        console.log(this.element)
        if (e.target.closest(".image")){
           e.target.closest(".image").nextElementSibling.hidden = false
        }
    }


    //<span class="title"> ${this.title} </span>

}



