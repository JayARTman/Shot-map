//function to show most recent posts on index page

const showLatestData = function() {
    const url = '/api/post/';
    fetch(url, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {

        let latestData = data.slice(Math.max(data.length - 6, 0))
        let allData = latestData.reverse();
        const template = Handlebars.compile(`
                         
        {{#each allData}}
        
        <div class="card h-25 mw-25 ml-auto mr-auto mb-2" style="width: 10rem;">
            <p class="m-0">{{this.title}}</p>
            <img class="card-img-top img-fluid img-thumbnail" src="/images/150.png" alt="Card image cap">
            <div class="p-2">
                <p class="card-text m-0">  {{this.user.user_name}}</p>
                <p class="card-text m-0"> {{this.city.city_name}}</p>
                
            </div>
        </div>
        
        {{/each}}
        `);
        const context = { allData }
        const compiled = template(context);
        console.log(context)
        
        document.getElementById('content').innerHTML = compiled;
})
};

showLatestData()


//function to allow user search posts based on city
let btn = document.getElementById("searchBtn");

const fetchData = function() {
    
    var input = document.getElementById("inputGroupSelect04");
    var inputSelect = input.value;
    var finalSelect = inputSelect.toString()
    console.log(inputSelect)
    const url = '/api/post/' + finalSelect;
    fetch(url, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        let allData = data.reverse();
        const template = Handlebars.compile(`
                         
        {{#each allData}}
        
        <div class="card h-25 mw-25 ml-auto mr-auto mb-2" style="width: 10rem;">
            <p class="m-0">{{this.title}}</p>
            <img class="card-img-top img-fluid img-thumbnail" src="/images/150.png" alt="Card image cap">
            <div class="p-2">
                <p class="card-text m-0">  {{this.user.user_name}}</p>
                <p class="card-text m-0"> {{this.city.city_name}}</p>
                
            </div>
        </div>
        
        {{/each}}
        `);
        const context = { allData }
        const compiled = template(context);
        console.log(context)
        
        document.getElementById('content').innerHTML = compiled;
        })
}

btn.addEventListener('click', fetchData)

