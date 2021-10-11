// checking

function check_char(){
    let textarea=document.querySelector('#get').value;
    if (textarea==''){
        document.querySelector('#result-1').innerHTML='0';
        document.querySelector('#result-2').innerHTML='0';
    }else{
        let word=textarea.split(' ').length;
        let cha=textarea.split('').length;
        document.querySelector('#result-1').innerHTML=word;
        document.querySelector('#result-2').innerHTML=cha;
    }

}
