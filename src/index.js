
const newCardForm = document.getElementById("new-card-form")
const allFlashcards = document.getElementById("all-flashcards")
const flashcardsAdapter = new FlashcardsAdapter
const categoriesAdapter = new CategoriesAdapter
const flashcardList = document.getElementById("flashcard-list")
const sortedList = flashcardList.sort

const sortButton = document.getElementById('sortButton')

document.addEventListener('DOMContentLoaded', ()=>{
    categoriesAdapter.fetchCategories()
    flashcardsAdapter.fetchFlashcards()
    newCardForm.addEventListener('submit', flashcardsAdapter.createNewFlashcard)
    sortButton.addEventListener('click', sortFunction)
})


sortFunction = () => {
    // let cardArray = document.querySelectorAll("#flashcard-list div")



    
    let arr
    if (Category.selectedCatagory) {
        arr = Flashcard.all.filter(card => card.category_id == Category.selectedCatagory)
    } else {
        arr = Flashcard.all
    }
    arr.sort(function(a,b) {
            let titleA = a.title.toLowerCase()
            let titleB = b.title.toLowerCase()
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB){
                return 1;
            }
            return 0;
            })
            Flashcard.all.forEach(
                card => card.element.remove()
            )
    Array.from(arr).forEach(card => card.attachToDom())
    (flashcard => flashcard.title)
    let larr = arr.map(title => title.toLowerCase())
    let sortedCards = larr.sort() 
  //debugger
    return sortedCards
    
}


