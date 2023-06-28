window.onload = function() {
    var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');

    for(item of btn)
    {
        item.addEventListener('click', (e)=>{
            let btntext = e.target.innerText;

            if(btntext =='×')
            {
                btntext= '*';
            }

            if(btntext=='÷')
            {
                btntext='/';
            }

            if(btntext === '=') {
                screen.value = eval(screen.value);
            }
            else if(btntext === 'CE') {
                screen.value = screen.value.substr(0,screen.value.length-1);
            }
            else if(btntext === 'AC') {
                screen.value = '';
            }
            else if(btntext === 'sin') {
                screen.value = Math.sin(eval(screen.value));
            }
            else if(btntext === 'cos') {
                screen.value = Math.cos(eval(screen.value));
            }
            else if(btntext === 'tan') {
                screen.value = Math.tan(eval(screen.value));
            }
            else if(btntext === 'x!') {
                var num = eval(screen.value);
                var f = 1;
                for(var i = 1; i <= num; i++) {
                    f = f * i;
                }
                screen.value = f;
            }
            else if(btntext === 'π') {
                screen.value += '3.14159265359';
            }
            else if(btntext === 'e') {
                screen.value += '2.71828182846';
            }
            else if(btntext === 'log') {
                screen.value = Math.log(eval(screen.value));
            }
            else if(btntext === '√') {
                screen.value = Math.sqrt(eval(screen.value));
            }
            else if(btntext === 'x y') {
                var values = screen.value.split('^');
                screen.value = Math.pow(eval(values[0]), eval(values[1]));
            }
            else {
                screen.value += btntext;
            }
        });
    }
}

//<script src="func.js"></script>