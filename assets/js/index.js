const fetchData = function() {
    const url = '/api/post'
    fetch(url, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        const script = document.getElementById('posts-template').innerHTML;
        const template = Handlebars.compile(`
                         
        {{#each data}}
        
            <div class='col-md-4 w-25 border m-auto'>   
                <div>
                    <p>{{this.title}} </p>
                </div>         
                <div>
                    <p>{{this.user.user_name}}</p>
            
                </div>
                <div>
            
                    <img src="/images/150.png">
                </div>
                <div>
                    <p>Where:{{this.city.city_name}}</p>
                </div>
                <div>
                    <p>About: {{ this.info }}</p>
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

