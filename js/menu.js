var menuState = {
	
	create: function(){
		game.add.sprite(0,0,'teen titans Go');	
	
		this.music = game.add.audio('sound 7');
		this.music.loop = true;
		this.music.volume = .5;
		this.music.play();

	if(! localStorage.getItem('master pizza')){
		localStorage.setItem('master pizza',0);
	}
if(game.global.highScore > localStorage.getItem('master pizza')){
localStorage.setItem('mater pizza',game.global.highScore);
} else{
	game.global.highScore > localStorage.getItem('master pizza');
game.global.highScore= localStorage = localStorage.getItem('master pizza')
}

		var txtHighScore = game.add.text(game.world.centerX,350,'HIGH SCORE:'  + game.global.highScore,{font:'30px BADABB',fill:'#FFD700'});
		 txtHighScore.anchor.set(.5);
		 txtHighScore.alpha = 0;

			
		var txtPressStart = game.add.text(game.world.centerX,780,' batalha unidos',{font:'50px BADABB',fill:'#489'});
			txtPressStart.anchor.set(.5)
			
		game.add.tween(txtPressStart).to({y:250},1000).start();
		    
		
	game.time.events.add(1000,function(){
		game.add.tween(txtHighScore).to({alpha:1},100).to({alpha:0},100).to({alpha:1},100).to({alpha:0},100).to({alpha:1},100).to({alpha:0},100).to({alpha:1},500).to({alpha:0},500).loop().start();

		var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		    enterKey.onDown.addOnce(this.startGame,this);
	},this);
},
startGame: function(){
	this.music.stop();
	game.state.start('stage1');
}
};

