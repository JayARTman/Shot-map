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
        
        <div class="card m-4 h-50" style="width: 18rem;">
            <p class="card-text">{{this.title}}</p>
            <img class="card-img-top" src="/images/150.png" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">{{this.user.user_name}}</p>
                <p class="card-text">{{this.city.city_name}}</p>
                <p class="card-text">{{this.info}}</p>
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

