class CategoriesAdapter{
    constructor(){
        this.baseURL = 'http://127.0.0.1:3000/categories'

    }
    fetchCategories(){
        fetch("http://127.0.0.1:3000/categories")
        .then(res => res.json())
        .then(response =>{
            response.data.forEach((e)=>{
                this.sanAndInitCategory(e)
            })
        })
    }
    
    sanAndInitCategory(response){
    
        let category = new Category({id: response.id, title: response.attributes.title}) 
        category.attachToDom()
    }
}




// class CategoriesAdapter {
//     constructor(){
//         this.baseUrl = "http://localhost:3000/categories"
//     }

//     //GET 
//     fetchCategories(){
//         fetch(this.baseUrl)
//             .then(response => response.json())
//             .then(json => {
//                 json.forEach( cat => {
//                     let category = new category(cat)
//                     Category.attachToDom()
//                 })
//             })
//     }

//     //CREATE   
//     createNewCategory(newCategoryObj){
//         let configObj = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify({category: newCategoryObj})
//         }
    
//         fetch(this.baseUrl, configObj)
//             .then(response => response.json())
//             .then(json => {
//                 if (json.error) {
//                     alert(json.error)
//                 } else {
//                 let category = new Category(json)
//                 categoryForm.reset();
//                 category.attachToDom();
//                 }
//             })    
//     }

//     //DELETE
//     deleteCategory(id) {
//         let cat = document.getElementById(`category-${id}`)
//         let title = document.getElementById('categories-title')
//         let container = document.getElementById('categories-container')
//         cat.remove();
//         let categoryIndex = Category.all.findIndex( e => e.id == id )
        
//         if (title.innerText != '') {
//             if (title.innerText.replace(' Categories', '') === Category.findById(id).title) {
//                 title.innerText = ''
//                 container.innerHTML = ''
//             }
//         }
//         Category.all.splice(categoryIndex, 1)
        
//         let configObj = {
//             method: "DELETE",
//             headers: {
//                 'Content-Type': "application/json",
//                 'Accept': "application/json"
//             }
//         }
        
//         fetch(this.baseUrl + `/${id}`, configObj)
//             .then(response => response.json())
//             .then(json => {
//                 alert(json.message)
//             })
//     }


// }