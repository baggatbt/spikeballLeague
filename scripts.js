//form open and close
function openForm() {
  document.getElementById("myForm").style.display = "flex";
  document.body.style.overflow = "hidden";
  document.getElementById('opaque').style.display='block';
  
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.body.style.overflow = "scroll";
  document.getElementById('opaque').style.display='none';
}
//end




//WARNING: first parameter must always be rating associated with who won the match
function calculateRatings(winRating, loseRating){
    var gap = winRating - loseRating;
    var oldWinRating = winRating;
    
    //handle expected match turnouts
    if(gap >= 0){
        if( gap <= 12){
            winRating += 8;
            loseRating -= 8;
        }
        else if(gap > 12 && gap <= 37){
            winRating += 7;
            loseRating -= 7;
        }
        else if(gap > 37 && gap <= 62){
            winRating += 6;
            loseRating -= 6;
        }
        else if(gap > 62 && gap <= 87){
            winRating += 5;
            loseRating -= 5;
        }
        else if(gap > 87 && gap <= 112){
            winRating += 4;
            loseRating -= 4;
        }
        else if(gap > 112 && gap <= 137){
            winRating += 3;
            loseRating -= 3;
        }
        else if(gap > 137 && gap <= 187){
            winRating += 2;
            loseRating -= 2;
        }
        else if(gap > 187 && gap <= 237){
            winRating += 1;
            loseRating -= 1;
        }
        else{
            winRating += 0;
            loseRating -= 0;
        }
    }
    //handle upsets
    else{
        gap *= -1;
        if(gap <= 12){
            winRating += 8;
            loseRating -= 8;
        }
        else if(gap > 12 && gap <= 37){
            winRating += 10;
            loseRating -= 10;
        }
        else if(gap > 37 && gap <= 62){
            winRating += 13;
            loseRating -= 13;
        }
        else if(gap > 62 && gap <= 87){
            winRating += 16;
            loseRating -= 16;
        }
        else if(gap > 87 && gap <= 112){
            winRating += 20;
            loseRating -= 20;
        }
        else if(gap > 112 && gap <= 137){
            winRating += 25;
            loseRating -= 25;
        }
        else if(gap > 137 && gap <= 162){
            winRating += 30;
            loseRating -= 30;
        }
        else if(gap > 162 && gap <= 187){
            winRating += 35;
            loseRating -= 35;
        }
        else if(gap > 187 && gap <= 212){
            winRating += 40;
            loseRating -= 40;
        }
        else if(gap > 212 && gap <= 237){
            winRating += 45;
            loseRating -= 45;
        }
        else{
            winRating += 50;
            loseRating -= 50;
        }
    }
    //return new ratings for winner, loser, and the point swing
    return [winRating, loseRating, Math.abs(winRating - oldWinRating)];
}