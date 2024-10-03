function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                console.log("NOW throwing error ");
                throw new Error('Network response was not ok'); //error is a class
            }
            return response.json(); // Return JSON data as a promise
        });
}

// Usage
fetchData('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data)) // Handle the fetched data
    .catch(error => console.error(error)); // Handle errors
