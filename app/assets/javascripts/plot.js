var Plot = (function(){
	
	function _setup() {

	  //color setting
	  randomA = 100 + random(100);
	  randomB = 100 + random(100);
	  randomC = 100 + random(100);


	  //object creation
	  	var index = 0;
	  	for (var i = 0; i < unit; i++) {
		dotp2.push(new DotS((rectWidth / 10) + canvasX + random(rectWidth) * (8 / 10) + canvasX, (rectHeight / 10)  + random(rectHeight) * (8 / 10) + 2*canvasY));
		inputArray.push(createP(''));
	  }

		_initLis();
		_initDotText(wordsLis);
		_initDotText(sentenceLis);

	}

   function _initLis(){
        var tempWordsLis = [];
		var tempSentLis = [];

        for (var i = 0; i < initialData.length; i++){
            tempWordsLis.concat(initialData[i].slice(2));
			tempSentLis.push(initialData[i][0]);
            }
       //word,sentenceの重複を削除 
        wordsLis = tempWordsLis.filter(function (x,i, self){
            return self.indexOf(x) === i;
        });
		sentenceLis = tempSentLis.filter(function (x,i,self){
			return self.indexOf(x) === i;
		});
   }

  function _initDotText(x){
		if (x.length > 0){
			for(var i = 0; i < x.length ; i++ ){
				dotp2.push(new DotS(rectWidth / 100 +  random(rectWidth * (95 / 100)) , (rectHeight/ 10 + random(rectHeight) * (9 / 10))));
				inputArray.push(createP(x[i]));
				unit += 1;
			}
    	}
	}

	function _draw() {
	  //noprotec
	  _phase2();
	  targetX = random(rectWidth / 10 + canvasX, rectWidth * 9 / 10);
	  targetY = random(rectHeight / 10 + canvasY, rectHeight * 9 / 10);
	}

	function _phase2() {
	  stroke(0);
	  strokeWeight(0.02);
	  noFill();
	  for (var i = 0; i < dotp2.length; i++) { //must be length
		dotp2[i].show();
		dotp2[i].move(random(-1, 1), random(-1, 1));
			
		//easing
		var dx = randomValueX[i] - dotp2[i].x
		dotp2[i].x += dx * easing;
		var dy = randomValueY[i] - dotp2[i].y
		dotp2[i].y += dy * easing;

		if (unit != 0) {
				//text position
		  inputArray[i].position(dotp2[i].x + canvasX -30, dotp2[i].y + canvasY);
		  dots.push(new DotS()); //don't need parameters
		  randomValueX.push(targetX);
		  randomValueY.push(targetY);
		}

		if (i < unit - 2) { //blocks overdefined
		  	fill(randomA, randomB, randomC, 10);
		  //println(rawValue);
		 	stroke(0);
			strokeWeight(0.5);
		  	triangle(dotp2[i].x, dotp2[i].y, dotp2[i + 1].x, dotp2[i + 1].y, dotp2[i + 2].x, dotp2[i + 2].y);
		  dots[i].show(dotp2[i].x, dotp2[i].y, 30, 30);
		}
			
	  }
	}

	return{
	phase2 :_phase2,  	
	draw : _draw,
	setup: _setup
	};

	
}());
