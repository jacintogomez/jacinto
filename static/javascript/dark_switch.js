let sheet=document.getElementById('styles');
let lightlink="../static/portfolio/styles.css";
let darklink="../static/portfolio/dark.css";
let isdark=(localStorage.getItem('darkmode')===true);

function switchmode(){
    if(sheet.href.includes('styles.css')){
        sheet.href=darklink;
        localStorage.setItem('darkmode',true);
        isdark=true;
    }else{
        sheet.href=lightlink;
        localStorage.setItem('darkmode',false);
        isdark=false;
    }
}

function currentsheet(){
    console.log(document.title+' is now '+isdark);
    if(isdark||document.title==='About'){
        sheet.href=darklink;
    }else{
        sheet.href=lightlink;
    }
}

currentsheet();