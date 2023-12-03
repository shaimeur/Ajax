const URL_USERS = `https://jsonplaceholder.typicode.com/users`;
const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";
const  offset = 0;
size = 10;

// const URL_POSTS = `https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${size}`;
// const URL_COMMENTS = `https://jsonplaceholder.typicode.com/comments?_start=${offset}&_limit=${size}`;


let users = []
let posts = []
let comments = []
const fetchUsers = async () => {
    try {
        const  res = await fetch(URL_USERS)
        const data = await res.json()

            for(let el of data){
                users.push(el)
            }
            return users
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error
    }
}



const fetchPosts  = async() => {
    try {
        const  res = await fetch(URL_POSTS)
        const data = await res.json()

            for(let el of data){
                posts.push(el)
            }
            return posts
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error
    }
}
const fetchComments  = async() => {
    try {
        const  res = await fetch(URL_COMMENTS)
        const data = await res.json()

            for(let el of data){
                comments.push(el)
            }
            return comments
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error
    }
}
const sortByUserName = (arr)=>{
    return arr.sort((a,b)=>( a.userName.toLowerCase() < b.userName.toLowerCase() ? -1 :1
    ))
}

 const sortByPostTitle =  (arr)=>{
    return arr.sort((a,b)=>( a.title.toLowerCase() < b.title.toLowerCase() ? -1 :1
    ))
}
const showPosts = (arr)=>{
    return arr.slice(0,10)
}

const fetchedData = async ()=>{
        try {
            await Promise.all([fetchUsers(),fetchPosts(),fetchComments()])
            // console.log(users)
            // console.log(posts)
            // console.log(comments)
           let allPost = posts.map((post) =>{
                const user = users.find((user => user.id == post.userId ))
                const postComment = comments.filter(comment => comment.postId == post.id )

            return {
                id:user.id,
                userName : user.username,
                title : post.title,
                body : post.body,
                published : true,
                comments: postComment.map((comment)=>{
                    return (
                            comment.body
                    )
                })
            }
           })
           console.log(allPost)
            //console.log(sortByUserName(allPost))
            // console.log(sortByPostTitle(allPost))
            // console.log(showPosts(allPost))
            const container = document.createElement("div")
            container.setAttribute("class","container")

            for(let post of allPost){
                const card = document.createElement("card")
                card.setAttribute("class","card")
                card.innerHTML = `
                    <div class="title">${post.title}</div><br>
                    <div class="body">${post.body}</div>
                    <span>${post.userName}</span>
        `
        container.append(card)
            }

        document.body.append(container)

        } catch (error) {
            console.log("Error fetching data",error)
        }
}
fetchedData()



