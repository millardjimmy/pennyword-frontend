class Category{
    static all = []
    constructor({id, name}) {
        this.id = id
        this.name = name 
        this.element = document.createElement("li")
        this.element.id = `category-${id}`
        this.categoryList = document.getElementById('category-list')

        Category.all.push(this)
    }

    fullRender(){
        this.element.innerHTML = `
            <h4> ${this.name}<h4>
        `
        return this.element

    }
    flashcards(){
        return Flashcard.all.filter((flashcard)=> flashcard.category_id == this.id)
    }
    attachToDom(){
        this.categoryList.append(this.fullRender())
        this.addEventListeners()
    }
    addEventListeners(){
        this.element.addEventListener('click', this.displayItems)

    }
    displayItems = () => {
        document.getElementById('flashcards-list').innerHTML =``
        this.flashcards().forEach((d)=>{
            d.attachToDom()
        })

    }
}



