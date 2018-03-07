var slide = $('ul>li')
for(let i=0;i<slide.length;i++){
	$(slide[i]).on('click',function(x){
		var index =$(x.currentTarget).index()
		var p =index * - 918
		$('#slides').css({
			transform:'translate('+ p +'px)'
		})
		n=index
		activeImage(slide.eq(n))
	})
}
var n=0
var size=slide.length
slide.eq(n%size).trigger('click')
var timerId =setTimer()
function setTimer(){
	return setInterval(()=>{
		n += 1
		slide.eq(n%size).trigger('click')
	},3000)
}
function activeImage($list){
	$list.addClass('active').siblings('.active').removeClass('active')
}
$('.wrapper').on('mouseenter',function(){
	window.clearInterval(timerId)
})
$('.wrapper').on('mouseleave',function(){
	timerId =setTimer
})
