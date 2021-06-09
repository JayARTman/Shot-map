
const what = ['1', 12, 'ok'];
// const displayPosts = function() {


    

//     console.log(postsToGo.length);
//     console.log(what)
    
    
// }
const getPosts = function() {
    const postToGo = [];
    fetch('/api/post', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.json();
    })
    .then(data => {

        

        for(i=0; i <= data.length - 1; i++) {
            const context = 
                {
                    'id': data[i].id,
                    'username': data[i].user.user_name,
                    'city': data[i].city.city_name
                }
            postToGo.push(context);
            
            
        }
        
        // displayPosts(postsData);
    })
    .then(() => {
        const script = document.getElementById('posts-template').innerHTML;
        const template = Handlebars.compile(script);
        const postInfo = postToGo;
        const compiledPost = template(postInfo);
        

        document.getElementById('content').innerHTML = compiledPost;
        
    })
   
}

getPosts();
