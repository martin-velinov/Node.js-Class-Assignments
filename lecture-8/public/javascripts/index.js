
function updateUser(userId) {
    const form = document.getElementById('form');
    const user = {
        id: userId,
        name: form.name.value,
        lastname: form.lastname.value,
        ssn: form.ssn.value,
        email: form.email.value
    };

    fetch(`http://localhost:3000/user/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        if (data.success) {
            window.location.replace("http://localhost:3000/");
        }
        if (!data.success) {
            // porakata od greskata ispecati ja vo crveni bukvi
            const errorMessage = document.getElementById('error_message');
            errorMessage.textContent = data.message;
        }
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

function deleteUser(userId) {

    fetch(`http://localhost:3000/user/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        
        if (data.success) {
            window.location.replace("http://localhost:3000/");
        }
    }).catch(function (err) {
        
        console.warn('Something went wrong.', err);
    });
};