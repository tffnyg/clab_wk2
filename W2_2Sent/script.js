let story = ["I can't read more than two sentences.", "Good, cause I can't write more than two sentences."]
console.log(story)

let extra = "[laugh track]";

let count = 0;

//1. identify button 
let button;
button = document.getElementById('button');
console.log(button);

// 2. listen to event click on button 
button.addEventListener("click", function () {
    console.log("telling story");
    count += 1;
    document.getElementById('storyy').innerHTML = story[count];
    if (count >= 1) {
        document.getElementById('button').innerText = "fin";
        console.log("story end")
        count = 0;
        console.log(count);
    }
});

//3. increase the number in the counter 
// function tellStory(){    
// }


//check for scrolling on the window
window.addEventListener('scroll', function () {
    console.log("user is scrolling");
    document.getElementById('extra').innerHTML = extra
    document.body.style.background = "hsl(58, 53%, 88%)"
})