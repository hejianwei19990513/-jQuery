$(function(){
    // $(".checkall").mousedown(function(){
    //     $(".j-checkbox,.checkall").prop("checked",$(".checkall").prop("checked"))
    // })
    $(".checkall").change(function(){
        $(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"))
        if($(".checkall").prop("checked")) {
            $(".cart-item").addClass("check-cart-item")
        }else {
            $(".cart-item").removeClass("check-cart-item")
        }
        })
    $(".j-checkbox").click(function(){
        if($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked",true)
        }else {
            $(".checkall").prop("checked",false)
        }
        if($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item")
        }else {
            $(this).parents(".cart-item").removeClass("check-cart-item")
        }
    })
    $(".increment").click(function(){
        var n = $(this).siblings(".itxt").val()
        n++;
        $(this).siblings(".itxt").val(n)
        var price =$(this).parents(".p-num").siblings(".p-price").html()
        price = price.substr(1);
        var sum = (price * n).toFixed(2)
        $(this).parents(".p-num").siblings(".p-sum").html('￥'+sum)
        getCount()
    })
    $(".decrement").click(function(){
        var n = $(this).siblings(".itxt").val()
        if(n == 1) return
        n--;
        $(this).siblings(".itxt").val(n)
        var price =$(this).parents(".p-num").siblings(".p-price").html()
        price = price.substr(1);
        var sum = (price * n).toFixed(2)
        $(this).parents(".p-num").siblings(".p-sum").html('￥'+sum)
        getCount()
    })
    $(".itxt").change(function(){
        var num = $(this).val()
        var price =$(this).parents(".p-num").siblings(".p-price").html().substr(1)
        $(this).parents(".p-num").siblings(".p-sum").html('￥' + (num*price).toFixed(2))
        getCount()
    })
    $(".p-action").click(function(){
        $(this).parents(".cart-item").remove()
        getCount()
    })
    $(".clear-all").click(function(){
        $(".cart-item").remove()
        getCount()
    })
    $(".remove-batch").click(function(){
        $(".j-checkbox:checked").parents(".cart-item").remove()
        getCount()
    }) 
    getCount()
    function getCount() {
        var count = 0;
        var money = 0;
        $(".itxt").each(function(i,ele){
            count += Number($(ele).val())
        })
        $(".amount-sum em").html(count)
        $(".p-sum").each(function(i,ele){
            money += Number($(ele).text().substr(1))
        })
        $(".price-sum em").html("￥"+money.toFixed(2))
    }
})