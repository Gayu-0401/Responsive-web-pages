let text = document.getElementById("para");
fetch("https://official-joke-api.appspot.com/jokes/random").then((res)=>res.json()
    .then((msg) => {
         console.log(msg.setup)
         text.textContent = msg.setup
    }
)
).catch((err) => console.log(err))

