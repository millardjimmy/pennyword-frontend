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
        this.sortFunction = document.getElementById('sortButton')
      this.id = id


      Flashcard.all.push(this)
    }

    sortFunction(){
    flashcardlist.sort(function(a,b) {
        (a.attributes.title() > b.attributes.title() ? 1 : -1)
        })
    }


    attachToDom(){  
        
        this.flashcardList.append(this.fullRender())
        this.addEventListeners()
    }
    
    fullRender(){
        this.element.innerHTML = `
        <li>
        <span class="image"> <img src="${this.image}" width="100" height="100"> </span>
        <span hidden="true" class="title"> ${this.title} </span>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
         `
         
         return this.element
    }

    addEventListeners(){
        this.element.addEventListener('click', this.handleListClick)
        this.element.addEventListener('click', this.handleImageClick)
        this.element.addEventListener('click', this.sortFunction)
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



