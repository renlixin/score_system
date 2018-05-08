(function(){
    $.DialogByZ = {
        //弹出提示框
        Alert: function (params) {
            Show(params,"Alert")
        },
        //关闭弹出框
        Close: function () {
            $(".zbox-popup,.zbox-popup-backdrop").remove()
        }
    }
    function Show(params){
        var dislogContainer
        var dialogInner
        var dialogBtn
        var blackFilter=$('<div class="zbox-popup-backdrop" style="display: block;"></div>');
        dislogContainer=$('<div class="zbox-popup" style="display: block;"></div>');
        dialogInner=$('<div class="zbox-popup-inner"><div class="zbox-popup-title">'+params.Title+'</div><div class="zbox-popup-text">'+params.Content+'</div></div>');
        dialogBtn=$('<div class="zbox-popup-buttons"><span class="zbox-popup-button" index="0">'+params.BtnL+'</span></div>');
        dislogContainer.append(dialogInner);
        dislogContainer.append(dialogBtn);
        setTimeout(function(){
            $(".zbox-popup").addClass('zbox-popup-in');
            $(".zbox-popup-backdrop").addClass('zbox-active');
        },10)
        $("body").append(blackFilter)
        $("body").append(dislogContainer)

        $(".zbox-popup-button").click(function(){
            $.DialogByZ.Close()
            return false
        })
    }
})($)