let operators=['+','-','*','/'];
let disp=document.querySelector('.display');
document.querySelectorAll('.num').forEach((x)=>{
    x.addEventListener('click',(e)=>{
        disp.textContent+=e.target.textContent;
    });
    x.addEventListener('mousedown',(e)=>{
        e.target.style.backgroundColor='darkgrey';
    });
    x.addEventListener('mouseup',(e)=>{
        e.target.style.backgroundColor='grey';
    });
});
function equalto(){
    if(opob.current=='')
        {
            console.log("");
        }
    else{
        let operands=disp.textContent.split(opob.current);
        if(operands[0]==''&&operands[1]=='') {
            disp.textContent='';
        }
        else if(operands[0]=='')
            {
                disp.textContent=operands[1];
            }
        else if(operands[1]=='')
            {
                disp.textContent=operands[0];
            }
        else {
            switch(opob.current)
            {
                case '+':
                    disp.textContent=Number.parseFloat((Number.parseFloat(operands[0])+Number.parseFloat(operands[1])).toFixed(5));
                    break;
                case '-':
                    disp.textContent=Number.parseFloat((Number.parseFloat(operands[0])-Number.parseFloat(operands[1])).toFixed(5));
                    break;
                case '*':
                    disp.textContent=Number.parseFloat((Number.parseFloat(operands[0])*Number.parseFloat(operands[1])).toFixed(5));
                    break;
                case '/':
                    if(operands[1]=='0')
                        {
                            disp.textContent='ERROR:DIVIDED BY ZERO';
                        }
                    else{disp.textContent=Number.parseFloat((Number.parseFloat(operands[0])/Number.parseFloat(operands[1])).toFixed(5));}
                    
                    break;
            }
        }  
        
        opob.current='';
    }
}
let opob={current:''};
document.querySelector('#equal').addEventListener('click',(e)=>{
    equalto();
    
});
document.querySelector('#equal').addEventListener('mousedown',(e)=>{
    e.target.style.backgroundColor='red';
});
document.querySelector('#equal').addEventListener('mouseup',(e)=>{
    e.target.style.backgroundColor='lightcoral';
});


document.querySelectorAll('.op').forEach((x)=>{
    x.addEventListener('click',(e)=>{
        if(opob.current!='')
        {
            equalto();
        }
        disp.textContent+=e.target.textContent;
        opob.current=e.target.textContent;
        dotCount=0;
    });
    x.addEventListener('mousedown',(e)=>{
        e.target.style.backgroundColor='burlywood';
    });
    x.addEventListener('mouseup',(e)=>{
        e.target.style.backgroundColor='beige';
    });
});

document.querySelector('#c').addEventListener('click',(e)=>{
    disp.textContent='';
    opob.current='';
});
document.querySelector('#c').addEventListener('mousedown',(e)=>{
    e.target.style.backgroundColor='salmon';
});
document.querySelector('#c').addEventListener('mouseup',(e)=>{
    e.target.style.backgroundColor='lightsalmon';
});

document.querySelector('#backspace').addEventListener('click',(e)=>{
    let con=disp.textContent.split('');
    let o=con.pop();
    if(operators.includes(o))
    {
        opob.current='';
    }
    disp.textContent=con.join('');

});
document.querySelector('#backspace').addEventListener('mousedown',(e)=>{
    e.target.style.backgroundColor='darkgrey';
});
document.querySelector('#backspace').addEventListener('mouseup',(e)=>{
    e.target.style.backgroundColor='grey';
});
let dotCount=0;
document.querySelector('#dot').addEventListener('click',(e)=>{
    
    if(dotCount<1) {
        disp.textContent+=e.target.textContent;
        dotCount++;
    }
    
    
});
document.querySelector('#dot').addEventListener('mousedown',(e)=>{
    e.target.style.backgroundColor='darkgrey';
});
document.querySelector('#dot').addEventListener('mouseup',(e)=>{
    e.target.style.backgroundColor='grey';
});