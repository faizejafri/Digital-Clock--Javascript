
    
    let btn=document.querySelector('#btn-digitalclock');
    

    btn.addEventListener('click', ()=> {
        btn.innerText = "This is your current time";


        setInterval(()=> {
            let a= new Date();
            let time;
            time= a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
            document.querySelector('#time').innerText = "Current time is " + time;   
        },500)
        // document.querySelector('#btn-digitalclock').innerText= " Below is the clock for you";
    })



    

