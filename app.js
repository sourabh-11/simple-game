const user = prompt("enter your choise S , W , G")
let cpuI =Math.floor(Math.random()*3);

let cpu = [ "S" ," w" , "G" ][cpuI];

const match = (cpu,user)=>{
    if (cpu === user) {

        return "no body";   
    }
    else if (cpu ==="S" && user==="w"){

        return "cpu";
    }
    
    else if (cpu ==="S" && user==="G"){

        return "user"
    }
    else if (cpu ==="G" && user==="S"){

        return "cpu";
    }
    else if (cpu ==="G" && user==="w"){

        return "user";
    }
    else if (cpu ==="W" && user==="S"){

        return "user";
    }
    else if (cpu ==="W" && user==="G"){

        return "cpu";
    }
}
 let  result  = match(cpu,user);
document.write(`cpu: ${cpu} and user: ${user} the winner is: ${result}  ` )   
