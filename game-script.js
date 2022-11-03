var score = 0;
function randomizeImages(){
  const randomSet = new Set();
  while (randomSet.size !== 6){
    randomSet.add(Math.floor(Math.random() * 6)+1);
  }
  console.log(randomSet)
  for (let x=0;x < randomSet.size;x++){
    document.getElementById("card_front_"+(x + 1)).src = "images/card-game-images/front_"+Array.from(randomSet)[x]+".png"
  }
}


window.onload=function(){
  randomizeImages()

$(".xmas_card_back").click(function(obj){
  var target_id = "#"+$(obj.target).attr("id");
  var change_id = "#card_back_"+target_id.slice(-1);
  $(change_id).show();
  $(target_id).hide();
});

$(".xmas_card_front").click(function(obj){
  var target_id = "#"+$(obj.target).attr("id");
  var change_id = "#card_front_"+target_id.slice(-1);
  flipped(target_id,change_id)
  $(change_id).show();
  $(target_id).hide();
});
  
}

function randomizeImages(){
  const randomSet = new Set();
  while (randomSet.size !== 6){
    randomSet.add(Math.floor(Math.random() * 6)+1);
  }
  console.log(randomSet)
  for (let x=0;x < randomSet.size;x++){
    document.getElementById("card_front_"+(x + 1)).src = "images/card-game-images/front_"+Array.from(randomSet)[x]+".png"
  }
}

function flipped(target_id,change_id){
  target_id = target_id.replace("#","")
  change_id = change_id.replace("#","")
  var card = document.getElementById(target_id);
  if (document.getElementById(change_id).getAttribute("src") == "images/card-game-images/front_1.png"){
    score += 1;
    won()
    return
  }
  if (card.classList.contains("flipped")){
    return
  }
  else{
    card.classList.add("flipped");
    score += 1;
  }

}

function won(){
  document.getElementById("score").innerHTML = score
  $("#win_screen").modal("show");
}



  