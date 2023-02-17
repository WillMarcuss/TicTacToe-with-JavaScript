document.addEventListener('DOMContentLoaded', function(){
  document.getElementById("top-left").addEventListener('click',handleButtons("top-left"))
  document.getElementById("top-middle").addEventListener('click',handleButtons("top-middle"))
  document.getElementById("top-right").addEventListener('click',handleButtons("top-right"))
  document.getElementById("middle-left").addEventListener('click',handleButtons("middle-left"))
  document.getElementById("middle").addEventListener('click',handleButtons("middle"))
  document.getElementById("middle-right").addEventListener('click',handleButtons("middle-right"))
  document.getElementById("bottom-left").addEventListener('click',handleButtons("bottom-left"))
  document.getElementById("bottom-middle").addEventListener('click',handleButtons("bottom-middle"))
  document.getElementById("bottom-right").addEventListener('click',handleButtons("bottom-right"))
  document.getElementById("reset").addEventListener('click',handleReset)
})