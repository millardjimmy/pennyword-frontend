
const newCardForm = document.getElementById("new-card-form")
const allFlashcards = document.getElementById("all-flashcards")
const flashcardsAdapter = new FlashcardsAdapter
const categoriesAdapter = new CategoriesAdapter

document.addEventListener('DOMContentLoaded', ()=>{
    categoriesAdapter.fetchCategories()
    flashcardsAdapter.fetchFlashcards()
    newCardForm.addEventListener('submit', flashcardsAdapter.createNewFlashcard)
    
})







