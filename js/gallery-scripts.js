document.getElementById("like").addEventListener('click', function() {
    this.classList.toggle("active");
});

maxLength = 20;
truncateStrings([document.getElementById("span1"), document.getElementById("span2"), document.getElementById("span3")], maxLength);

function truncateStrings(strings, maxLength) {
    for(i = 0; i<strings.length; i++){
        strings[i].innerText = truncate(strings[i].innerText, maxLength);
    }
}

function truncate(string, maxLength){
    if (string.length>maxLength){
        string=string.slice(0,maxLength)+"...";
    }
    return string;
}