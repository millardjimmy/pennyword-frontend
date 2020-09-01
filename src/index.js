
const newCardForm = document.getElementById("new-card-form")
const allFlashcards = document.getElementById("all-flashcards")
const flashcardsAdapter = new FlashcardsAdapter

document.addEventListener('DOMContentLoaded', ()=>{
    flashcardsAdapter.fetchFlashcards()
    newCardForm.addEventListener('submit', flashcardsAdapter.createNewFlashcard)
    
})







