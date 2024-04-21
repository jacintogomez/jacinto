let sheet=document.getElementById('styles');

function switchmode(){
    if(sheet.href.includes('styles.css')){
        sheet.href="static/portfolio/dark.css";
    }else{
        sheet.href="static/portfolio/styles.css";
    }
}