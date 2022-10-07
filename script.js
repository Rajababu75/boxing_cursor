let card =document.querySelector("#card");
card.addEventListener("mousemove",function(details){
    var dum =this.getBoundingClientRect();
    if(details.clientX-dum.x<dum.width/2){
      var redclr=  convertToRange(details.clientX-dum.x,[0,dum.width/2],[255,0])
      this.style.backgroundColor=`rgb(${redclr},0,0)`;
    }
    else{
        var grenclr=  convertToRange(details.clientX-dum.x,[dum.width/2,dum.width],[0,255])
      this.style.backgroundColor=`rgb(0,${grenclr},0)`;
    }

})
function convertToRange(value, srcRange, dstRange){
  // value is outside source range return
  if (value < srcRange[0] || value > srcRange[1]){
    return NaN; 
  }

  var srcMax = srcRange[1] - srcRange[0],
      dstMax = dstRange[1] - dstRange[0],
      adjValue = value - srcRange[0];

  return (adjValue * dstMax / srcMax) + dstRange[0];

}