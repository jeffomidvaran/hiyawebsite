//bandcamp player

function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=368,height=590');");
}

//code for birdfading in


$("#bird").hide();


//$("#flappingBird").fadeIn("slow);
