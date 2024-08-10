let sheet=document.getElementById('mode');
let lightlink="../static/portfolio/light.css";
let darklink="../static/portfolio/dark.css";
let isdark=(localStorage.getItem('darkmode')==="true");

function switchmode(){
    console.log('in there');
    if(sheet.href.includes('light.css')){
        setTimeout(function(){
            sheet.href=darklink;
            localStorage.setItem('darkmode',true);
            isdark=true;
            console.log('fat bitches');
        },2500);
    }else{
        sheet.href=lightlink;
        localStorage.setItem('darkmode',false);
        isdark=false;
    }
}

function currentsheet(){
    console.log(document.title+' is now '+localStorage.getItem('darkmode')+' '+typeof(localStorage.getItem('darkmode')));
    if(isdark){
        console.log('loading dark');
        sheet.href=darklink;
    }else{
        console.log('loading light');
        sheet.href=lightlink;
    }
}

currentsheet();