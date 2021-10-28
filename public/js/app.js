const form = document.querySelector("form");
form.addEventListener("submit",  l=> {
    l.preventDefault()
    const email = l.target.email.value;
    const password = l.target.password.value;
    
    const payLoad = {
     email,
     password
    };

    fetch("/loginDetails", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(payLoad)
    }).
    then(function(data) {
        return data.json();
    }).
    then(function(res) {
        const msg = document.getElementById("msg")
            // check if the response is success or error
        if (res.ok) {
            msg.style.color = 'green';
            msg.innerText = res.message;
        } else {
            msg.style.color = 'red';
            msg.innerText = res.message;
        }
        msg.style.fontSize = '23px';
    });
});