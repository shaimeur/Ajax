 const URL_USERS = `https://jsonplaceholder.typicode.com/users`;
const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";
var offset = 0,
size = 10;

users = []
let posts = []
let comments = []
const fetchUsers = async() => {
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
const fetchedData = async ()=>{
        try {
            await Promise.all([fetchUsers(),fetchPosts(),fetchComments()])
            console.log("users ====> ",users)
            console.log("posts =====> ",posts)
            console.log("comments =====> ",comments)
        } catch (error) {
            console.log("Error fetching data",error)
        }
}
fetchedData()