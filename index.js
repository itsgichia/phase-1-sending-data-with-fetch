function submitData(name, email){
    const data = {
        name: name,
        email: email,
    }
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
    },
    body: JSON.stringify(data)
};

return fetch("http://localhost:3000/users",configurationObject)
    .then(function (response){
        return response.json();
})
    .then(function(data){
        console.log(data);
        //append the new id to the DOM (test 2)
        const newId = data.id;
        // Example: document.body.innerHTML += `<p>New ID: ${newId}</p>`;
})
    .catch(function(error){
        console.log(error.message);
        document.body.innerHTML += `<p>${error.message}</p>`;
});
}
submitData('steve', 'steve@steve.com');