const form = document.body.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const id = document.forms["dl"]["chartid"].value
    
    fetch("https://api.phira.cn/chart/" + id)
        .then(res => res.json())
        .then(data => {
            const a = document.createElement("a")
            a.style.display = "none"
            a.href = data.file
            a.download = data.name + ".zip"
            document.body.appendChild(a)
            a.click()
            a.remove()
    document.forms["dl"]["chartid"].value = ""
        })
        .catch(err => alert(err))
})
