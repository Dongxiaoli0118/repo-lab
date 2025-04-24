let count =0
function increaseCount(){
    count++
    displayCount()
    checkCountValue()
}
function displayCount(){
    document.getElementById("countDisplay").innerHTML=count
}
function checkCountValue(){
    if(count===10){
        alert("您的 Instagram 帖子获得了 10 位关注者！恭喜您！")
    }else if(count===20){
        alert("您的 Instagram 帖子获得了 20 位关注者！继续加油！")
    }
}