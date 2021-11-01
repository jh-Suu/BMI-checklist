var tlinput = document.querySelector('#tall')
var weiinput = document.querySelector('#weigh')
var btns = document.querySelector('#btns')
var clbtns = document.querySelector('#cl-btns')
var result = document.querySelector('.bmi-result-box')
var result0 = document.querySelector('#result')
var result1 = document.querySelector('#result-1')
var result2 = document.querySelector('#result-2')

btns.onclick = function(){
    var tall = tlinput.value / 100
    var weigh = weiinput.value
    result.style.opacity = 1
    
  
    if(isNaN(parseInt(tall)) || isNaN(parseInt(weigh))){
        result0.innerHTML = '對,沒關係你在繼續,沒關係 真的 真的 '
        result1.innerHTML = '不要給我在那邊填一些有的沒的CC哈哈'
        result2.innerHTML = '請務必填寫正確' 
    }else if(tall <= 0 || weigh <= 0){
        result0.innerHTML = '沒關係你在繼續,真的'
        result1.innerHTML = '你最好身高體重還有再給我負數的'
        result2.innerHTML = '請務必填寫正確' 
    }else{
        var sum = (weigh / tall ** 2).toFixed(2)
        result0.innerHTML = sum
        
        if( sum >= 35){
            result1.innerHTML = '重度過胖'
            result2.innerHTML = '是怎樣!你三餐是吃麥當勞膩,把油當水喝膩 最好給我動起來'
        }else if(sum >= 30){
            result1.innerHTML = '中度肥胖'
            result2.innerHTML = '沒關係啊,你就繼續阿，五年十年後,橋下公園你繼續胖下去啊,反正也沒人期待你瘦下來和健健康康的'
        }else if(sum >= 27){
            result1.innerHTML = '輕度肥胖'
            result2.innerHTML = '等一下喔,不是什麼都數大就是美,不要給我吃飽了就想躺著,躺著就爬不起來'
        }else if(sum >= 24){
            result1.innerHTML = '過重'
            result2.innerHTML = '稍微該注意一下了喔,不然後果自負喔'
        }else if(sum >= 18.5){
            result1.innerHTML = '正常'
            result2.innerHTML = '唉呦~美脈喔'
        }else {
            result1.innerHTML = '過瘦'
            result2.innerHTML = '那安內~山尬安內 啊膩呀美賽喔~~'
        }
    }
        
} 
clbtns.onclick = function(){
    // var tall = tlinput.value
    // var weigh = weiinput.value
    tlinput.value =""
    weiinput.value =""
    result1.innerHTML = ""
    result2.innerHTML = ""
    result.style.opacity = 0
}