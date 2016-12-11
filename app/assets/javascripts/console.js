var Console = (function() {

    var sentence = ' ';
    var words =  ' ';
    var sentenceRawNum = [];
    var rawNum = 3;
    var length = 0;
    var can_delete = true;
    var consoleLineNum = 30;

    function  _putText(){
            for (var i = 0 ; i < sentenceLis.length ; i++) {
                text(sentenceRawNum[i] + ' ' + "User ID:  " + sentenceLis[i], rectWidth,15 +  i*15);
            }
            if(can_delete == true){
                sentence = sentence.substring(0,sentence.length -1);
                can_delete = false;
            }
    
            text((rawNum + 1) + ' ' + "User ID:  " + sentence + _blincChar(), rectWidth,  (sentenceLis.length * 15) ,540,300);
            fill(0, 102, 153);
        }

    function _makeLetter(){

            if ((key >= 'A' && key <= 'z' )|| 48 <= keyCode && keyCode <= 57  || key == ''){
                words += key; 
                sentence += key;
           
            }else if (key == ' ' && words!= ''){
                    sentence += ' ';
                    wordsLis.push(words);

                    //dotplot
                        dotp2.push(new DotS(rectWidth / 100 +  random(rectWidth * (95 / 100)) , (rectHeight/ 10 + random(rectHeight) * (9 / 10))));
                        inputArray.push(createP(words));
                        unit += 1;

                    words = '';
            }else if(keyCode == 13 && words != '' ){
                sentence +=  '.';
                rawNum += 1;
                
                //dotplot
                dotp2.push(new DotS((rectWidth / 100 + random(rectWidth * 95 / 100)) , (rectHeight / 10 + random(rectHeight) * (9 / 10)) ));
                inputArray.push(createP(sentence));
                unit += 1;

                sentenceLis.push(sentence);
                sentenceRawNum.push(rawNum);
                sentence = ' ';  
                if(sentenceLis.length > consoleLineNum){
                    sentenceLis.shift();
                    sentenceRawNum.shift();
                }
               
                words = '';

            }

                print(key);
                can_delete = false; 
    }
    
             
     function _delKey(){
        can_delete = true;    
    
    } 

    function  _blincChar(){
        return  (frameCount >> 4 & 1) == 0 ? "_":"  "; 
     
    }

    return {
        putText: _putText,
        makeLetter: _makeLetter,
        delKey: _delKey,
        blincChar: _blincChar,
        
    };


}());
