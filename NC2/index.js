var nameV = [];
var mailV = [];
var majorM = [];
var hobbyM = [];
var contador = 0;
var posicion = 0;

function correctCaptcha(){
    alert("CORRECTO");
}
     
function limpiar(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    var ps = document.getElementsByName("pasatiempos");
    var carrera = document.getElementsByName("carrera"); 

    for (var i=0; i<carrera.length;i++){
        carrera[i].checked = false;
    }

    for (var i=0; i<ps.length;i++){
        ps[i].checked = false;
    }
}

function validar(){
    const patternEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    var banderaCarrera = false;
    var banderaPasa = false;
    var carrera = document.getElementsByName("carrera");  
    var ps = document.getElementsByName("pasatiempos");
    for (var i=0; i<carrera.length;i++){
        if (carrera[i].checked){
            banderaCarrera = true;
            i = carrera.length;
        }
    }

    for (var i=0; i<ps.length;i++){
        if (ps[i].checked){
            banderaPasa = true;
            i = ps.length;
        }
    }

    //alert(patternEmail.test(document.getElementById("email").value));

    if (document.getElementById("name").value===""){
        alert("Te falta agregar un nombre !");
    }else if (patternEmail.test(document.getElementById("email").value)===false){
        alert("Ingresa un correo valido !");
    }else if (banderaCarrera === false){
        alert("Selecciona al menos una carrera");
    }else if(banderaPasa === false ){
        alert("Selecciona al menos un pasatiempos");
    }else{
        return true;
    }
    return false;
}

function agregar(){
    
    validacion = validar();

    if (validacion === true){
        contador++;

        for(var i=0; i<3; i++) {
            majorM[contador] = new Array(3);
        }
    
        for(var i=0; i<4; i++) {
            hobbyM[contador] = new Array(4);
        }
    
        var nombre = document.getElementById("name");
        var nombre2 = document.getElementById("name2");
    
        var email = document.getElementById("email");
        var email2 = document.getElementById("email2");
    
        var ps = document.getElementsByName("pasatiempos");
        var ps2 = document.getElementsByName("pasatiempos2");
    
        var carrera = document.getElementsByName("carrera"); 
        var carrera2 = document.getElementsByName("carrera2"); 
    
        nombre2.value = nombre.value;
        nameV[contador] = nombre.value;
       
        email2.value = email.value;
        mailV[contador] = email.value;
     
    
        for (var i=0; i<carrera.length;i++){
            carrera2[i].checked = carrera[i].checked;
            majorM[contador][i] =  carrera[i].checked;
        }
    
        for (var i=0; i<ps.length;i++){
            ps2[i].checked = ps[i].checked;
            hobbyM[contador][i] =  ps[i].checked;
        }
    
        alert("Registro almacenado");
        limpiar();
        document.getElementById("conta").value = contador;
        document.getElementById("conta2").value = contador;
        document.getElementById("pos").value = contador;
        posicion = contador;
    }
}

function cambiar(orientacion){
    if (orientacion === "siguiente"){
        if ( (posicion+1)>0 && (posicion+1)<=contador){
            posicion++;
        }else{
            alert("Ya no hay mas registros siguientes!");
        }
    }else{
        if ( (posicion-1)>0 && (posicion-1)<=contador){
            posicion--;
        }else{
            alert("Ya no hay mas registros anteriores !");
        }
    }

    if (posicion!=0){
        document.getElementById("pos").value = posicion;
        document.getElementById("name2").value = nameV[posicion];
        document.getElementById("email2").value = mailV[posicion];
        var carrera2 = document.getElementsByName("carrera2"); 
        var ps2 = document.getElementsByName("pasatiempos2");
    

        for (var i=0; i<majorM[posicion].length;i++){
            carrera2[i].checked = majorM[posicion][i];
        }

        for (var i=0; i<hobbyM[posicion].length;i++){ 
            ps2[i].checked = hobbyM[posicion][i];
        }
    }
    
}