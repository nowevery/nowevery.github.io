<div class="popup _favorite">
	<div><div class="text">已加入收藏</div>
		<span>您可至「會員專區」>「收藏清單」查看商品！</span>
	</div>
</div>

<div class="popup _addcart" style="display: none;">
	<div class="shopcart-hover">
		<div class="title">加入購物清單</div>
        <div class="shopcart-item">
            <a href="products_detail.html"><img class="pro-img-in" src="SRC/images/demo/02.jpg"></a>
            <div class="s-h-l">
                <div class="pro-r-name">簡約條紋百搭上衣</div>
                <div>顏色：黑</div>
                <div>尺寸：S</div>
                <div>數量：1</div>
                <p>$800</p>                           
            </div>
        </div>
    </div>
</div>
<script>
	$('._add-btn').on('click', function() {
        $('._addcart').fadeIn().delay(1500).fadeOut(200);
        $('._favorite').hide();
    })
    $('._favorite-btn').on('click', function() {
        $('._addcart').hide();
        $('._favorite').fadeIn().delay(1000).fadeOut(200);
        
        if ($(this).val() == 0) {
			$(this).addClass('focus');
			$('._favorite').find('.text + span').show();
			$('._favorite').find('.text').text("已加入收藏");
			$(this).val(1);
        }else{
        	$(this).removeClass('focus');
        	$('._favorite').find('.text + span').hide();
        	$('._favorite').find('.text').text("已移除收藏");
        	$(this).val(0);
        };
    })
   $('.like-btn').on('click', function() {
        $('._favorite').fadeIn().delay(1000).fadeOut(200);
    })
    $('.del-btn').on('click', function() {
        $(this).parents('.shop-item').remove();

    })
</script>