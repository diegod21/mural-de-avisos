document.addEventListener("DOMContentLoaded", ()=>{
    updatePost()
})

function updatePost(){
    fetch("http://192.168.1.9:2000/api/all").then(res=>{
        return res.json().then(json=>{
            let postsElements = ''

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
            postsElements += postselement;
            })
            document.getElementById("posts").innerHTML = postsElements;
        })
    })
}
function newPost(){
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = {title:title, 
                description:description}

    const options = {
        method: "POST",
        headers: new Headers({'content-type':'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://192.168.1.9:2000/api/new", options).then(res => {
            console.log(res)
            updatePost()
    })
}