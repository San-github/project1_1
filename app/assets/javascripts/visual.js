var Visual = (function() {

    var nodeCount;
    var nodes = new Array(100);
    for(var i = 0; i < 100 ; i++){
        nodes[i] =  Node;
        }   
    var nodeTable = new Object();

    var edgeCount;
    var edges = new Array(500);
    for(var i = 0; 1< 100;i++){
        edges[i] =  Edge.edge();
    }


    var  selectColor = '#FF3030';
    var  fixedColor  = '#FF8080';
    var  edgeColor   = '#000000';
    var  minimum_size = 2;

    var  font;

    function _seUp(){
        loadData();
        font = createFont("Meiryo UI", 10);
        textFont(font);  
        smooth();
    }

    function _loadData() {
        var lines = loadStrings("sample.txt");
        var data;
  
      for(var i = 0; i < lines.length; i++){
        data = split(lines[i], ',');     
        addEdge(data[0], data[1]);
      }  
    }

    function _addEdge(fromLabel, toLabel) {
      var from = Node.findNode(fromLabel);
      var to = Node.findNode(toLabel);
      from.increment();
    //  from.fixed = true;
      from.nodeColor = '#FFFFFF';
      to.nodeColor = '#FF0000';
      to.increment();
      
      for (var i = 0; i < edgeCount; i++) {
        if (edges[i].from == from && edges[i].to == to) {
          edges[i].increment();
          return;
        }
      } 
      
      var e = new Edge(from, to);
      e.increment();
      if(edgeCount == edges.length){
        edges += edges;
      }
      edges[edgeCount++] = e;
    }

    function  findNode(label) {
      label = label.toLowerCase();
      n = Node.node(nodeTable.get(label));
      if (n == null) {
        return addNode(label);
      }
      return n;
    }

    function  addNode(label){
      n = new Node(label);  
      if(nodeCount == nodes.length){
       nodes += nodes;
      }
      nodeTable.put(label, n);
      nodes[nodeCount++] = n;
      return n;
    }

    function _draw() {
      if (record) {
        beginRecord(PDF, "output.pdf");
      }
      
      background(255,255,255);

      for(var i = 0; i < edgeCount; i++){
        edges[i].relax();
      }
      for(var i = 0; i < nodeCount; i++){
        nodes[i].relax();
      }
      for(var i = 0; i < nodeCount; i++){
        nodes[i].update();
      }
      for (var i = 0; i < edgeCount ; i++){
        if(edges[i].from.count >= 3 && 
           edges[i].to.count >= 3){
          edges[i].draw();
        }
      }
      for(var i = 0; i < nodeCount; i++){
        if(nodes[i].count >= 3){
          nodes[i].draw();
        }
      }
      
      if(record){
        endRecord();
        record = false;
      }
    }

    var record;

    function keyPressed(){
        if(key == 'r'){
            record = true;
      }
    }

    var selection = new Node; 

    function _mousePressed() {
        var closest = 20;
        for(var i = 0; i < nodeCount; i++){
            var n = nodes[i];
            var d = dist(mouseX, mouseY, n.x, n.y);
            if(d < closest){
            selection = n;
            closest = d;
            }
        } 
        if(selection != null){
            if(mouseButton == LEFT){
            selection.fixed = true;
            }else if(mouseButton == RIGHT){
            selection.fixed = false;
            }
        }
    }   

    function _mouseDragged(){
        if(selection != null){
            selection.x = mouseX;
            selection.y = mouseY;
        }
    }

    function _mouseReleased(){
        selection = null;
    }   

   return {
       mouseReleased: _mouseReleased,
       mouseDragged: _mouseDragged,
       mousePressed: _mousePressed,
       draw:_draw,
       setUp: _setUP,
       addEdge: _addEdge,
       loadData: _loadData,
   
   };

}());
