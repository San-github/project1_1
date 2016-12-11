function Action(){
        //variables for phase 2

		var initialData = testData = [
				['dog is animal','id1','dog','is','animal'],
				['cat and dog are animal','id2','cat','and','dog','are,animal'],
				['I like cat','id3','I','like','cat'],
				['I have a cat and dog','id4','I','have','a','cat','and,dog'],
				['long long cat','id5','long','cat']
			];

		//edge
		var edge ;

        var unit = 1;
        var count;
        var smoothedValue1 = 0;
        var smoothedValue2 = 0;
        var smoothedValueY = 0;
        var amt = 0.1; // for smoothing
        var randomA, randomB, randomC;
        var easing = 0;
        var targetX;
        var targetY;
        var op = 0;

        //global
        var dotp2 = [];
        var dots = [];
        var bgcolor = 0;
        var r = 20;

        //dom variables
        var canvas;
        var canvasX = window.parent.screen.width*(1/6);
        var canvasY = window.parent.screen.height*(1/10);
        var inputArray = [];

        var rawValue;
        var randomValueX = [];
        var randomValueY = [];
        
        //canvas
        var canvasHeight =   window.parent.screen.height *(4/5);
        var canvasWidth = window.parent.screen.width * (2/3);
		var rectHeight = canvasHeight -4;
		var rectWidth = canvasWidth *(2/3);
		
		//word sentence

    	var wordsLis = [];
    	var sentenceLis = [
            'Let\'s Hyp!',
            'Search your world!',
            'Make your world!',
            'if you want to see help, put \' Help \' '  ];
       
        function setup() {
            canvas = createCanvas(canvasWidth,canvasHeight);
            canvas.position(canvasX,canvasY);
			ellipseMode(CENTER);
			Plot.setup();
        }
        
        function draw() {
            console.log('ffffff')
			rectWidth =  window.parent.screen.width*(4/9) ;
        	rectHeight =  window.parent.screen.height*(4/5)  - 2;      
			
		    background(0);
            textSize(14);
            fill(255);
            rect(1,1,rectWidth,rectHeight);
			Console.putText();
			Plot.draw();
        }
    
        function keyTyped(){
            Console.makeLetter();
        }
    
        function keyPressed(){
            Console.delKey();
        }   
        


		function windowResized() {
			redraw(); 
		  	resizeCanvas(window.parent.screen.width*(2/3), window.parent.screen.height*(4/5));
		}

}
