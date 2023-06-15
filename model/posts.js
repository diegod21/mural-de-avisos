module.exports ={

    posts:[
        {
            id: "idfirst",
            title: "titulo teste",
            description: "descrição teste"
        },
    ],
    getAll(){
        return this.posts
    },
    newPost(title,description){
        this.posts.push({id:generetaId(),title,description})
    },
    deletePost(){},

    
}

function generetaId(){
    return Math.random.toString(36).substring(2,9)
}