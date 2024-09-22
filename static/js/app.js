  fetch('/weather')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weather').innerText = `Error: ${data.error}`;
            } else {
                document.getElementById('weather').innerText = `${data.temperature}°C`;
                document.getElementById('status').innerText = `${data.detailed_status}`;
                document.getElementById('city').innerText = `${data.city}`.replace('ş', 's');
                document.getElementById('country').innerText = `${data.country}`
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));


document.getElementById("startBtn").addEventListener("click", startAnimation);
document.getElementById("keyword-input").addEventListener('keypress', tagAdded);
const tags = [];

function tagAdded(event){
    if(event.key === 'Enter'){
            let input = document.getElementById("keyword-input");
            let tagText = input.value.trim();

            if(tagText !== ""){
                let newTag = document.createElement("div");
                newTag.className = "tag";
                newTag.textContent = tagText;
                document.getElementById("tag-container").appendChild(newTag);
                setTimeout(function (){
                    newTag.classList.add('show');
                }, 0);
                setTimeout(function (){
                    newTag.classList.add('hide');

                }, 2000);

                setTimeout( function () {
                    document.getElementById("tag-container").removeChild(newTag);
                }, 3000);

                input.value= "";
                tags.push(tagText);

            }
        console.log(tags);
    }

}


function startAnimation() {
   $("#umbrella").fadeOut(function() {
   $(this).remove();});
   $("#p-style2").fadeOut(function() {
   $(this).remove() });
   $("#selection-box").fadeOut(function() {
   $(this).remove() });

   setTimeout(function(){
        $("#weather-box").animate({top:'-=26%'}, 2000);}, 300);


   setTimeout(function(){
       document.getElementById("keyword-box").classList.add('show');
        document.getElementById("question").classList.add('show');
        document.getElementById("suggestions").classList.add('show');
        document.getElementById("resultsButton").classList.add('show');
   }, 1300)


}

document.getElementById("resultsButton").addEventListener("click", final_page);

function showcase() {

}

