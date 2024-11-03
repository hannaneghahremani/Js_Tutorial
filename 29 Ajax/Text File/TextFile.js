
    // 1) text file => Asynchronous = false
    var request = new XMLHttpRequest()
    request.open('GET' , 'Data.txt' , false) // false = Asynchronous Of , true = Asynchronous on
    request.send()
    if(request.status === 200){ // Status=200 => ok
        document.write(request.responseText);
    }else{
        console.log('error')
    }

    // 1) text file => Asynchronous = true
    var request = new XMLHttpRequest()
    request.open('GET' , 'Data.txt' , true) 
    request.onreadystatechange=function(){
        if((request.readyState === 4) && (request.status === 200))
        {
            document.writeln(request.responseText);
        }else{
            console.log('error')
        }
    }
    request.send()

    
    