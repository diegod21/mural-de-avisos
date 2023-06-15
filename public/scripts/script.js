function updatePost(){
    fetch("http://localhost:2000/api/all").then(res=>{
        return res.json().then(json=>{
            let postselements = ''

            let posts = JSON.parse(json)
            posts.forEach((post)=>{
                let postselement = ` <div id="${post.id}" class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
            </div>`
            })
        })
    })
}
function newPost(){

}