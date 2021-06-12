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
        
        <div class="card h-25 mw-25 ml-auto mr-auto mb-2" style="width: 10rem;">
            <p class="m-0">{{this.title}}</p>
            <img class="card-img-top img-fluid img-thumbnail" src="/images/150.png" alt="Card image cap">
            <div class="p-2">
                <p class="card-text m-0">{{this.user.user_name}}</p>
                <p class="card-text m-0">{{this.city.city_name}}</p>
                
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

