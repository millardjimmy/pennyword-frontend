class FlashcardsAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/flashcards'
    }

    //INDEX
    fetchFlashcards(){
        fetch(this.baseUrl)
            .then(response => response.json())
            .then(json => { 
                json.data.forEach( card => { 
                    let flashcard = new Flashcard(card.attributes)
                    
                    flashcard.attachToDom()
                })
            })
    }
    //DELETE
    deleteFlashcard(id) {
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }

        fetch(`http://localhost:3000/flashcards/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        })
    }

    //CREATE
    createNewFlashcard(e) {
        e.preventDefault()
        const title = document.getElementById("new-card-title").value 
        const description = document.getElementById("new-card-description").value
        const image = document.getElementById("new-card-image").value
        const category = document.getElementById("new-card-category").value
        
        let newCardobj = { 
            title: title,
            description: description,
            image: image,
            category: category
            
        }  
        
       
        
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newCardobj)
        }

        fetch('http://localhost:3000/flashcards', configObj)
        .then(res => res.json()) 
        .then(json => {
            
            let flashcard = new Flashcard(json.data.attributes)
            flashcard.attachToDom()
        })
        document.getElementById('new-card-form').reset()

        // fetch('http://localhost:3000/flashcards', configObj)
        //     .then(response => response.json())
        //     .then(json => {
        //         let flashcard = new Flashcard(json.data.attributes)
        //         flashcard.attachToDom()
        //         }
        //     })
        
    }

}