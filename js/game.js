var game = new Phaser.Game(1000,650,Phaser.CANVAS);

game.global = {
    score:  0,
    highScore: 0
};

 game.state.add('boot',bootState);
 game.state.add('load',loadState);
 game.state.add('menu',menuState);
 game.state.add('stage1',stage1State);
 game.state.add('stage2',stage2State);
 game.state.add('stage3',stage3State);
 game.state.add('stage4',stage4State);
 game.state.add('stage5',stage5State);
 game.state.add('end',endState);

 game.state.start('boot');
