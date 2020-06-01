const form = document.addItem;
const ulElement = document.createElement("ul");
ulElement.setAttribute("id", "list");
ulElement.setAttribute("name", "list");
form.appendChild(ulElement);


submission = e => {
    e.preventDefault();
    const custInput = form.title.value;
    if (custInput !== "") {   
        const liElement = document.createElement("li");

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";

        liElement.textContent = form.title.value;

        const editbtn = document.createElement("button");
        editbtn.textContent = "Edit";
        editbtn.setAttribute('id', 'edit');

        deletebtn.addEventListener("click", deleteItem); 
        editbtn.addEventListener("click", editItem); 

        document.getElementById("list").appendChild(liElement);
        liElement.append(editbtn);
        liElement.append(deletebtn);

        form.title.value = "";

    }
}

const deleteItem = (e) => {
    e.preventDefault()
    e.target.parentNode.remove(this);
}

const editItem = e => {
    e.preventDefault()

    const editBox = document.createElement("input");
    editBox.setAttribute("name","editedText")
    const savebtn = document.createElement("button");
    savebtn.textContent = "Save"
    editBox.value = e.target.parentNode.childNodes[0].nodeValue
    const motherElement = e.target.parentNode;
    e.target.parentNode.childNodes[0].nodeValue = "";
    motherElement.prepend(editBox);
    // console.log(editbtn.parentNode)


    e.target.parentNode.replaceChild(savebtn, e.target);
    // e.target.parentNode.childNodes[1] = "";
    savebtn.addEventListener("click", saveItem); 
}

const saveItem = e => {
    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit"
    editbtn.addEventListener("click", editItem);
    const editedText = document.createTextNode(form.editedText.value);

    console.log(form.editedText);
    console.log(form.editedText.value);
    const motherElement = e.target.parentNode;
    console.log(motherElement);
    console.log(e);
    // e.target.parentNode.replaceChild(form.editedText.value, firstChild);
    // motherElement.prepend(form.editedText.value);

    // e.target.parentNode.childNodes[0] = form.editedText.value;

    // console.log(e.target.parentNode.childNodes[0] = "Hi");
    e.target.parentNode.firstChild.remove();

    e.target.parentNode.insertBefore(editedText, e.target);

    e.target.parentNode.replaceChild(editbtn, e.target);

    


    // e.target.parentNode.childNodes[0].nodeValue = "";



}



form.addEventListener("submit", submission);




