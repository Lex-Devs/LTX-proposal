document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = '<div id="player" style="width: 50px; height: 50px; background-color: red; position: absolute; top: 0; left: 0;"></div>';
    
    const player = document.getElementById('player');
    let x = 0;
    let y = 0;

    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowUp':
                y = Math.max(0, y - 10);
                break;
            case 'ArrowDown':
                y = Math.min(250, y + 10);
                break;
            case 'ArrowLeft':
                x = Math.max(0, x - 10);
                break;
            case 'ArrowRight':
                x = Math.min(250, x + 10);
                break;
        }
        player.style.top = y + 'px';
        player.style.left = x + 'px';
    });
}
