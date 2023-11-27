    const boxes=document.querySelectorAll(".box");
    const gameInfo=document.querySelector(".game-info");
    const gameBtn=document.querySelector(".btn");

    let currentPlayer;
    let gameGrid;
    let maxCapacity=9; 
    var touch=0;
    let winningPosition=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];

    function startGame(){
        currentPlayer ='X';
        gameGrid=["","","","","","","","",""];
        // console.log(gameGrid.length);
        gameBtn.classList.remove("active");
        gameInfo.innerText=`Current Player - ${currentPlayer}`;
    }
    startGame()
    boxes.forEach((box,index)=>{
        box.addEventListener("click",()=>{
            handelClick(index);
        })
    });

    function handelClick(index){
        if(gameGrid[index]===""){
            boxes[index].innerText=currentPlayer;
            gameGrid[index]= currentPlayer;
            boxes[index].style.pointerEvents="none";
            swap();
            gameOver();
        }
        // touch++;
        // console.log(touch);
        
    };

    function swap(){
        if(currentPlayer==="X"){
            currentPlayer="O";
        }
        else{
            currentPlayer="X";
        }
        gameInfo.innerText=`Current Player - ${currentPlayer}`;
    };

    function gameOver(){
        touch++;
        console.log(touch);
        let answer="none";
        winningPosition.forEach((position)=>{
            if(gameGrid[position[0]]==="X"&&gameGrid[position[1]]==="X"&&gameGrid[position[2]]==="X"){
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
                answer="X";
                showButton(answer);
                unSelectable();
            }
            else if(gameGrid[position[0]]==="O"&&gameGrid[position[1]]==="O"&&gameGrid[position[2]]==="O"){
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
                answer="O";
                showButton(answer);
                unSelectable();
            }
            if(touch===9){
                console.log("main 9 ho gyi");
                // buttonDikhhao();
                showButton(answer);
            }
        }); 
        
    }
    function showButton(answer){
        console.log(answer);
         gameBtn.classList.add("active");
         gameInfo.innerText=`Winner Player - ${answer}`;
    };
    gameBtn.addEventListener("click",()=>{
        location.reload();
     });
    function unSelectable(){
        boxes.forEach((pos)=>{
            pos.style.pointerEvents="none";
        });
    };
    function isGridBoxFull(){
       showButton();
    }
    function buttonDikhhao(){
        gameBtn.classList.add("active");
        gameInfo.innerText=`Start Match Again`;
    }
