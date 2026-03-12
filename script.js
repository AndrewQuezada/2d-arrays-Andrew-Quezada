let images = [
    ['images/Untitled design (1).png', 'images/Untitled design.png','images/Untitled design (2).png',],
    ['images/Untitled design (3).png', 'images/Untitled design (4).png','images/Untitled design (5).png',],
];

console.log(images.length);

let display = document.getElementById('display')
let html= "<table>" ;


for(let i = 0; i < images.length; i++){

html += "<tr>"
    for(let j = 0; j < images[i].length; j++){
{/* <img src="/images/${images[i][j]}.png"></img> */}
html += `<td><img src="${images[i][j]}"></td>`;

    };

html += "</tr>";
};

html += "</table>";
display.innerHTML = html;