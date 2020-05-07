var app= new Vue({
		el:'#app',
		data:{
			isOpen: false,
			select:false,
			color:'linear-gradient(45deg, #0136af, #22abfa)',
			img:'blue.png',
			mode:'white.css',
		},
		methods:{
			updataColor:function(event) {
				this.color = event.target.getAttribute('data-color');
			},
			updataImg:function(event) {
				this.img = event.target.getAttribute('data-img');
			},
			ColorImg:function (event) {
				this.updataColor(event);
				this.updataImg(event);
			},
			changeMode:function(event) {
				this.mode=event.target.getAttribute('data-mymode');
			}
		}
		
	});