import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((posts) =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts,
            })
        );
};


export const createPost = postData => dispatch => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:3000');
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
};
