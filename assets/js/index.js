const fetchData = function() {
    const url = '/api/post'
    fetch(url, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        const script = document.getElementById('posts-template').innerHTML;
        const template = Handlebars.compile(`<div class="border">
                         
        {{#each data}}
        
            <div class='border'>              
                <div>
                    <p>UserName{{this.user.user_name}}</p>
            
                </div>
                <div>
            
                    <img src="../assets/images/150.png">
                </div>
                <div>
                    <p>City Name{{this.city.city_name}}</p>
                </div>
                <div>
                    <p>Description of post: {{ this.title }}</p>
                </div>
            </div>
        
        {{/each}}
        `);
        const context = { data }
        const compiled = template(context);
        console.log(context)
        
        document.getElementById('content').innerHTML = compiled;
        })
}
const fill = function() {
    
    
}
fetchData()

