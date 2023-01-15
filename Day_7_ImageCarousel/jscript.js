const templates = document.querySelectorAll(".template")
var x = 0;

templates.forEach(
    (template, index) => {
        template.style.left = `${index * 100}%`
});

const next = () => {
    x++
    slideTemplate()
}

const prev = () => {
    x--
    slideTemplate()
}

const slideTemplate = () => {
    templates.forEach(
        (template) => {
            template.style.transform = `translateX(${x * 100}%)`
        }
    )
}