function getJoke(){
    const apiUrl="https://api.chucknorris.io/jokes/random";
    const jokeElement = document.getElementById("jokeContainer");
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            jokeElement.innerHTML= data.value;
        })
        .catch(error => {
            console.log("Error Found!")
        });
}
