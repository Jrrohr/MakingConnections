var count = [2, 418]

function accept(){
    var add = document.querySelector("#currentConnections");
    count[1]++;
    add.innerText = count[1];
    reduce = document.querySelector("#connectionRequests");
    count[0]--;
    reduce.innerText = count[0];
}

function deny(){
    reduce = document.querySelector("#connectionRequests");
    count[0]--;
    reduce.innerText = count[0];
}

function remove(element) {
    element.remove(element);
}

function changeName(){
    userName = document.querySelector("#userName")
    userName.innerText = "Geraldine Balfour"
}

function signInOut(element){
    if(element.innerText == "Sign Out"){
        element.innerText = "Sign In"
    }
    else {
        element.innerText = "Sign Out"
    }
}