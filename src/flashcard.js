class Flashcard {
    constructor({title, description, image, category_id, id}){
      this.title = title
      this.description = description
      this.image = image
      this.category_id = category_id
      this.element = document.createElement('div')
      this.element.id = `flashcard-${this.id}`
      this.flashcardList = document.getElementById('flashcard-list')
      this.element.addEventListener('click', this.handleListClick)
      this.id = id
    }

attachToDom(){  
    this.flashcardList.append(this.fullRender())
}
 fullRender(){
     this.element.innerHTML = `
     <li>
     <span class="image"> <img src="${this.image}" width="100" height="100"> </span>
     <span class="title"> ${this.title} </span>
     </li>
     
     <button class="delete" data-id="${this.id}">Delete</button>
     `
     return this.element
 }

 handleListClick = (e)=>{
    if (e.target.className === "delete"){ 
        let id = e.target.dataset.id
        flashcardsAdapter.deleteFlashcard(id)
        this.element.remove()
    }
    
}


}



