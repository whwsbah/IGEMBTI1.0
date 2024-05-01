$(function () {
    $(".mbti1").click(function () {
        var str = $(this).text()
        var arr = str.split("")
        $(".skill-box").css({
            "display": "block"
        })
        // console.log(arr)
        for (var i = 0; i < arr.length; i++) {
            // console.log(arr)
            if (arr[i] == "E") {
                $(".e").css({
                    "display": "block"
                })
            }
            if (arr[i] == "I") {
                $(".i").css({
                    "display": "block"
                })
            }
            if (arr[i] == "F") {
                $(".f").css({
                    "display": "block"
                })
            }
            if (arr[i] == "N") {
                $(".n").css({
                    "display": "block"
                })
            }
            if (arr[i] == "S") {
                $(".s").css({
                    "display": "block"
                })
            }
            if (arr[i] == "P") {
                $(".p").css({
                    "display": "block"
                })
            }
            if (arr[i] == "J") {
                $(".j").css({
                    "display": "block"
                })
            }
            if (arr[i] == "T") {
                $(".t").css({
                    "display": "block"
                })
            }
        }
    })
    $(".mbti2").click(function () {
        var str = $(this).text()
        var arr = str.split("")
        $(".skill-box").css({
            "display": "block"
        })
        // console.log(arr)
        for (var i = 0; i < arr.length; i++) {
            // console.log(arr)
            if (arr[i] == "E") {
                $(".e").css({
                    "display": "block"
                })
            }
            if (arr[i] == "I") {
                $(".i").css({
                    "display": "block"
                })
            }
            if (arr[i] == "F") {
                $(".f").css({
                    "display": "block"
                })
            }
            if (arr[i] == "N") {
                $(".n").css({
                    "display": "block"
                })
            }
            if (arr[i] == "S") {
                $(".s").css({
                    "display": "block"
                })
            }
            if (arr[i] == "P") {
                $(".p").css({
                    "display": "block"
                })
            }
            if (arr[i] == "J") {
                $(".j").css({
                    "display": "block"
                })
            }
            if (arr[i] == "T") {
                $(".t").css({
                    "display": "block"
                })
            }
        }
    })
})
document.addEventListener("click",(event)=>{
    id=event.target.textContent
    // console.log(id)
})
function exitPage() {
    window.open("./收集资源/game.html"+"?txt="+encodeURI(id))
    window.close("mbti.html")

}
function newplayer(){
    window.open("./newplayer.html"+"?txt="+encodeURI(id))
    window.close("mbti.html")
}
