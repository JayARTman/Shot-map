
const getPosts = function() {
    const content = document.getElementById('content');
    const postsData = [];
    fetch('/api/post', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        for(i=0; i <= data.length-1; i++) {
            postsData.push(data[i]);
        }
    })
    return postsData;
    
}

getPosts();
