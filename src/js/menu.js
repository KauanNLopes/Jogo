var menuState = {
	
	create: function(){
		game.add.sprite(0,0,'teen titans Go');	
	
		this.music = game.add.audio('sound 7');
		this.music.loop = true;
		this.music.volume = 50;
		this.music.play();
        
		


		
		
			
		var txtPressStart = game.add.text(game.world.centerX,780,' batalha unidos',{font:'50px BADABB',fill:'#489'});
			txtPressStart.anchor.set(.5)
			
		game.add.tween(txtPressStart).to({y:250},1000).start();
		
	game.time.events.add(1000,function(){
		var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		    enterKey.onDown.addOnce(this.startGame,this);
	},this);
},
startGame: function(){
	this.music.stop();
	game.state.start('stage1');
}
};

