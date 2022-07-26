const login = async (username, password) => {
    try {
        const response = await fetch('http://localhost:8080/api/v1/authentication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const auth_data = await response.json();
        sessionStorage.setItem('user_id', auth_data.userId);
        sessionStorage.setItem('user_token', auth_data.userToken);
        return Promise.resolve();
    } catch (e) {
        return Promise.reject(e);
    }
}

const register = (username, password) => {
    //TODO
}

const getToken = () => {
    return sessionStorage.getItem('user_token');
}

const submitLogin = () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    login(username, password)
        .then( _ => {
            alert('Zalogowano');
        } )
        .catch( err => {
            console.log(err);
        });
    return false;
}