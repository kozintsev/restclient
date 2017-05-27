var file=document.getElementById("file"),
xhr=new XMLHttpRequest(),
form=new FormData();
 
file.onchange=function()
{
    var upload_file=file.files[0];
    form.append("fil",upload_file);
    xhr.open("post","re.php",true);
    xhr.send(form); 
}