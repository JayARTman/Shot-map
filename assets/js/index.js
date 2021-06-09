
const what = ['1', 12, 'ok'];
// const displayPosts = function() {


    

//     console.log(postsToGo.length);
//     console.log(what)
    
    
// }
const getPosts = function() {
    
    fetch('/api/post', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data)
        const script = document.getElementById('posts-template').innerHTML
        const template = Handlebars.compile(script);
    //     const template = Handlebars.compile(`
    //     {{#each data}}
    //     <article class="border">
    //     <div id="userNameDiv">
    //         <p>{{this.user.user_name}}</p>
    //     </div>
        
    //     <div id="uploadedPictureDiv">
    //         <img src="../assets/images/150.png">
    //     </div>
    //     <div id="CityName1">
    //       {{this.city}}
    //     </div>
    //     <div id="descriptionDiv">
    //         <p>Description: {{ description }}</p>
    //     </div>
    //     </article>
    //     <article class="border">
    //     <div id="userNameDiv2">
    //         <p>1.username</p>
    //     </div>
    //     <div id="uploadedPictureDiv2">
    //         <img src="../assets/images/150.png">
    //     </div>
    //     <div id="CityName2">
    //         <p>1.city</p>
    //     </div>
    //     <div id="descriptionDiv2">
    //         <p>Description of picture.</p>
    //     </div>
    //     </article> 
    //     {{/each}}
    //   `);
        // const postInfo = postToGo;
        const compiledPost = template(data);
        
        // console.log(context)
        document.getElementById('content').innerHTML = compiledPost;
        
        // const postToGo = [];

        // for(i=0; i <= data.length - 1; i++) {
        //     const context = 
        //         {
        //             'id': data[i].id,
        //             'username': data[i].user.user_name,
        //             'city': data[i].city.city_name
        //         }
            
        //     postToGo.push(context);
            
            
        // }
        // return postToGo;
        
        // displayPosts(postsData);
    })
    // .then((postToGo) => {
        
    //     console.log(postToGo);
        // const script = document.getElementById('posts-template').innerHTML;
    //     const template = Handlebars.compile(`
    //     {{#each username}}
    //     <article class="border">
    //     <div id="userNameDiv">
    //         <p>{{this.username}}</p>
    //     </div>
    //     {{/each}}
    //     <div id="uploadedPictureDiv">
    //         <img src="../assets/images/150.png">
    //     </div>
    //     <div id="CityName1">
    //       {{this.city}}
    //     </div>
    //     <div id="descriptionDiv">
    //         <p>Description: {{ description }}</p>
    //     </div>
    //     </article>
    //     <article class="border">
    //     <div id="userNameDiv2">
    //         <p>1.username</p>
    //     </div>
    //     <div id="uploadedPictureDiv2">
    //         <img src="../assets/images/150.png">
    //     </div>
    //     <div id="CityName2">
    //         <p>1.city</p>
    //     </div>
    //     <div id="descriptionDiv2">
    //         <p>Description of picture.</p>
    //     </div>
    //     </article> 
        
    //   `);
    //     // const postInfo = postToGo;
    //     const compiledPost = template(postToGo);
        
    //     // console.log(context)
    //     document.getElementById('content').innerHTML = compiledPost;
        
    // })
   
}

getPosts();
