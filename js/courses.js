document.querySelector("#search-button").oninput = function(){
    let value = this.value;
    let elements = document.querySelectorAll('.course-card');

    if(value != ''){
        elements.forEach(function(element){           
            let found = false;
            let elementTexts = 
            [
                element.querySelector("h5"),
                element.querySelector(".card-text"),
                element.querySelector(".card-footer span"),
                element.querySelector(".custom__button3")
            ];
  
            elementTexts.forEach(function(elementText){
                let position = elementText.innerText.toLowerCase().search(value.toLowerCase());
                if(position != -1){
                    found = true;
                    elementText.innerHTML = insertMark(elementText.innerText, position, value.length);
                }else{
                    clear(elementText);
                }
            });

            hideIfNecessary(element, found);
        });
    }
    if(value == ''){
        clearAll(elements)
    }
}

function hideIfNecessary(element, found){
    if(!found){
        element.classList.add('hide'); 
    }else{
        element.classList.remove('hide');
    }
}

function insertMark(string, position, length){
    return string.slice(0, position) +
    '<mark>'+string.slice(position, position + length) +
    '</mark>'+string.slice(position + length);
}

function clearAll(elements){
    elements.forEach(function(element){
        element.classList.remove('hide');
        clear(element);
    });
}

function clear(element){
    element.innerHTML = element.innerHTML.replace(/(<mark>)/g, '');
}