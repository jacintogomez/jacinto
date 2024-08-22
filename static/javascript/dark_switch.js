let sheet=document.getElementById('mode');
let lightlink="../static/portfolio/light.css";
let darklink="../static/portfolio/dark.css";
let isdark=(localStorage.getItem('darkmode')==="true");
let emoji=document.getElementById('drk');

function switchmode(){
    if(sheet.href.includes('light.css')){
        emoji.innerHTML='𖤓';
        sheet.href=darklink;
        localStorage.setItem('darkmode',true);
        isdark=true;
    }else{
        emoji.innerHTML='☾';
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