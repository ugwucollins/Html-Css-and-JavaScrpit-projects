/* let nextparagraph=document.getElementById("next")
console.log(nextparagraph)


function next() {
    console.log("button clicked")
    nextparagraph.textContent="Next"
}
 */
let CountEl=document.getElementById("count-el")

console.log(CountEl)

let count=0

function increament() {
    count=count+1
    CountEl.textContent=count
}