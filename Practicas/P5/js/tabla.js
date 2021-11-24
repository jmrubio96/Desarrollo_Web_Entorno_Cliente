function updateTable(){
    element = document.getElementById("tabla");
    element.innerHTML = '';
    var tagr  = document.createElement("tr");
    var tagd;
        for (var i = 0; i < agregar.length; i++) {
            tagr  = document.createElement("tr");
            element.appendChild(tagr);
            tagd = document.createElement("td");
            tagd.textContent=agregar[i].fullName;
            tagr.appendChild(tagd);
            
        }
}

function addPerson(name, surname1, surname2)
{
    if(!name || !surname1 || !surname2){
        alert("No se han rellenado los campos");
    }else{
    agregar.push(new Person(name, surname1, surname2));
    updateTable();
    }
}

function deleteLastPerson()
{
    if(!agregar || agregar.length==0){
        alert("No hay personas que borrar");
    }else{
    agregar.pop();
    updateTable();
    }
}