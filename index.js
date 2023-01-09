
{/* <div id="newtask">
    <input type="text" placeholder="Task to be done..">
    <button id="push">Add</button>
</div> */}
// const likh=document.addEventListener(input)
document.querySelector("#button").onclick=function(){
  if(document.querySelector(".inner-block input").value.length==0){
    alert("`Please Enter Your Task`")
  }
  else{
document.querySelector(".tag").innerHTML +=`
<div class="tasks">
<span id="taskname">
${document.querySelector(".inner-block input").value}
</span>
</div>



`
  }
  
}
