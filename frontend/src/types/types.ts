export interface formError {
    field : string,
    message : string
}

export interface signUpResult  {
    status : boolean
    jwt? : string
    msg?:string
}

interface author {
    name : string
}

export interface Blogposts {
    id:string,
    title : string,
    content : string,
    published : boolean , 
    auhtorId : string,
    publishedDate : string
    author : author
}


export interface BlogCardProps {
    blogpost : Blogposts
}


interface createBlog {
    title : string,
    content : string
}

export interface User {
    id : string,
    name : string,
    email:string,
    posts : Blogposts[]
}
