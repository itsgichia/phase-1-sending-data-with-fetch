function submitData(){
    const username = 'Gichia';
    const userEmail = 'gichiamuiruri@icloud.com'
    
    console.log(username);
    console.log(userEmail);



const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
    },
    body: JSON.stringify({
        username: "user",
        userEmail:"gichiamuiruri@icloud.com",
    })
};

fetch("http://localhost:3000/users",configurationObject)
    .then(function (response){
        return response.json();
})
    .then(function(object){
        console.log(object);
})
    .catch(function(error){
        console.log(error.message);
});
return fetch("http://localhost:3000/users", configurationObject);
}
submitData();