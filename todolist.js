let formDom = document.querySelector("#form1")
let userListDOM = document.querySelector("#list")
let addButtonDOM=document.querySelector("#liveToastBtn")
formDom.addEventListener("submit",handler)

function handler(event) {
     event.preventDefault()
    var yap = document.querySelector("#task")
    if (yap.value) {
      additem(yap.value);
      successAdd();}

    else {errorAdd();}
      
      yap.value = ""
    }


const additem  = (x) =>  {
       let liDOM = document.createElement("li")
       liDOM.innerHTML = `<li class="remove">${x}<button style="padding-right: 5px; padding-top:5px;" class="close">&times</button></li>`
       userListDOM.append(liDOM)
}

function successAdd() {
  const toastSuccess = document.querySelector('#liveToast.success');
  var toast = new bootstrap.Toast(toastSuccess);
  toast.show();
}


  function errorAdd() {
    const toastError = document.querySelector('#liveToast.error');
    var toast = new bootstrap.Toast(toastError);
    toast.show();
  }


userListDOM.addEventListener("click",clickEvent)

function clickEvent(e) {
    if (e.target.className == "remove" || e.target.className == "close") {
        e.target.parentElement.remove();
    }    
  }
