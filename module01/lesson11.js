function showFunction(successCalback, errorCallback){
    if(true){
        successCallback("Requisição bem sucedida")
    } else{
        errorCallback("Erro na requisição")

    }
}

let successCalback = function (message) {
    console.log(message);

}

let errorCallback = function (message) {
    console.log(message);
}

showFunction(successCalback, errorCallback)