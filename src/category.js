class Category{
    static all = []
    constructor({id, title}) {
        this.id = id
        this.title = title 
        this.element = document.createElement("li")
        this.element.id = `category-${id}`
        this.categoryList = document.getElementById('category-list')

        Category.all.push(this)
    }
    attachToDom(){
        this.categoryList.append(this.fullRender())
        this.addEventListeners()
    }

    fullRender = () => {
        
        this.element.innerHTML = `
            <b> ${this.title}<b>
        `
        return this.element

    }
    flashcards(){
        return Flashcard.all.filter((flashcard)=> flashcard.category_id == this.id)
    }

    addEventListeners(){
        this.element.addEventListener('click', this.displayCards)

    }
    displayCards = () => {
        //debugger
        document.getElementById('flashcard-list').innerHTML = ``
        this.flashcards().forEach((d)=>{
            d.attachToDom()
        })

    }
}



