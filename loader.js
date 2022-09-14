export default () => new Promise(res => {
    let cont = 1
    const interval = setInterval(() => {
        console.clear()
        console.log(`%c${"•".repeat(cont++) + " cargando..."}`, "color:skyblue")
    }, 500)
    setTimeout(() => {
        clearInterval(interval)
        console.clear()
        res(true)
    }, 7000)
})