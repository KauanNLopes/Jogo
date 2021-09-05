var loadState = {
    preload: function(){
		var txtLoading = game.add.text(game.world.centerX,250,'LOADING',{font:' 30px BADABB',fill:'#490'});
			txtLoading.anchor.set(.5);
	
		var progressBar = game.add.sprite(game.world.centerX,350,'progressBar');
			progressBar.anchor.set(.5);
			
		game.load.setPreloadSprite(progressBar);
		
		game.load.image('bg','img/bg.png');
		game.load.image('bk','img/bk.png');
		game.load.image('block','img/block.png');
		game.load.image('end','img/end.png');
		game.load.image('part','img/part.png');
		game.load.image('teen titans Go','img/teen titans Go.png');
		
		game.load.spritesheet('coin','img/coin.png',32,32);
		game.load.spritesheet('pizza','img/pizza.png',32,32);
		game.load.spritesheet('vida','img/vida.png',29,29);
		game.load.spritesheet('enemy','img/enemy.png',24,40);
		game.load.spritesheet('player','img/player.png',24,32);
		game.load.spritesheet('player','img/player.png',24,32);
		game.load.spritesheet('player','img/player.png',24,32);
		game.load.spritesheet('robin','img/robin.png',55.12,74.5);

		game.load.audio('getitem','sfx/getitem.ogg');
		game.load.audio('loseitem','sfx/loseitem.ogg');
		game.load.audio('sound 7','sounds/sound 7.ogg');
		game.load.audio('wam pizza','sounds/sfx/wam pizza.ogg');

       game.physics.startSystem(Phaser.Physics.ARCADE);

    },

	create: function(){
		game.state.start('menu');
	}
};