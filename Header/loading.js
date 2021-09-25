/* document.onreadystatechange = function(e)
{
    if (document.readyState === 'complete')
    {
        //dom is ready, window.onload fires later
        
    }
}; */
window.onload = function(e)
{
    //document.readyState will be complete, it's one of the requirements for the window.onload event to be fired
    //do stuff for when everything is loaded
    setTimeout(loading, 2000)
    function loading () {
        var load = document.getElementById("loadline");
        load.style.opacity = "0";
    }
};