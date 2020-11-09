$(function(e){
    xrData()
    $("input").on("keydown",function(e){
        if(e.keyCode == 13) {
            var msg = {title:$("input").val(),done:false};
            var todo = getData();
            todo.push(msg);
            setData(todo);
            xrData()
            $(this).val("")
        }
    })
    function getData() {
        var data = localStorage.getItem("todo")
        if(data) {
            return JSON.parse(data)
        }else {
            return []
        }
    }
    function setData(todo) {
        localStorage.setItem("todo",JSON.stringify(todo))
    }
    function xrData() {
        //这里ul也要写
        $("ol,ul").html("")
        var todo = getData()
        var gou = 0
        var cha = 0
        $(todo).each(function(i,ele){
            if(ele.done) {
                // 这里必须写在里面，不然点一下ol里面的一个就会把之前所有的true都移到下面ul去
                var li = $("<li><input type ='checkbox' checked> <p></p> <a href='javascript:;'></a></li>")
                $(li).find("p").html(ele.title)
                $(li).find("a").attr("id",i)
                $("ul").prepend(li)
                gou++
            }else {
                var li = $("<li><input type ='checkbox' > <p></p> <a href='javascript:;'></a></li>")
                $(li).find("p").html(ele.title)
                $(li).find("a").attr("id",i)
                $("ol").prepend(li)
                cha++
            }
        })
        $("#todocount").html(cha)
        $("#donecount").html(gou)
    }
    $("ol").on("click","a",function(){
            var todo = getData()
            var num = $(this).attr("id")
            todo.splice(num,1)
            console.log(num);
            setData(todo)
            xrData()
    })
    $("ul").on("click","a",function(){
        var todo = getData()
        var num = $(this).attr("id")
        todo.splice(num,1)
        setData(todo)
        xrData()
})

    $("ol,ul").on("click",":checkbox",function(){
        var todo = getData()
        var num = $(this).siblings("a").attr("id")
        todo[num].done = $(this).prop("checked")
        setData(todo);
        xrData();
    })
})