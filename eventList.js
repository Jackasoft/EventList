const appendIt = document.querySelector('.append');
const btn = document.querySelector('.btn');
var inputText = document.querySelector('.input');

const addTodo = (e) =>{
    e.preventDefault();

    if(inputText.value === ""){
       alert('Input field cannot be empty!');
    }else{
        var listDiv = document.createElement('div');
        // listDiv.className ='listD';

        const list = document.createElement('em');
        list.classList.add('listItems')
        const Lcontent = document.createTextNode(`${inputText.value}`);
        list.appendChild(Lcontent);

        const removeBtn = document.createElement('button');
        const removeBtnText = document.createTextNode('remove');
        removeBtn.appendChild(removeBtnText);
        removeBtn.classList.add('remove');
        //listDiv.addEventListener('click',removeIt);
        removeBtn.addEventListener('click',removeIt)
     
        listDiv.appendChild(list);
        list.appendChild(removeBtn);
        appendIt.appendChild(listDiv);

        inputText.value = "";
    }
}

// Event listener with 'enter' key 
inputText.addEventListener('keypress',(e) =>{
    if(e.key === "Enter"){
        e.preventDefault();
        btn.click();
    }
});

// Using event listener 'click'
btn.addEventListener('click',addTodo);

// removing list from the main list
const removeIt = event =>{
    event.stopImmediatePropagation();
    let target = event.currentTarget;
    var parent = target.parentElement.parentElement; 
    parent.remove();  
    event.stopPropagation();

}

