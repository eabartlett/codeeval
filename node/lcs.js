var fs = require('fs');


function node(item, index){
  return {
    val : item,
    pos : index,
    inEdge : function(node){
      this.inEdges.push(node);
    },
    outEdge : function(node){
      this.outEdges.push(node);
    },
    toString : function(){
      return this.val;
    },
    inEdges = [],
    outEdges = []
  }
}

function graph(){
  nodes : {},
  nodeArr : [],
  addNode : function(val){
    var n = node(val, this.nodeArr.length);
    this.nodeArr.push(n);
    this.nodes[val] = n;
  },
  numEdges : 0,
  addEdge : function(node1, node2){
    if(this.nodes[node1.toString()] && this.nodes[noe1.toString()]){
      var e = edge(node1, node2);
      node1.outEdge(node2);
      node2.inEdge(node1);
      this.numEdges++;
    }
  }
}
      
function lcs(s1, s2){
  var g1 = graph();
  var g2 = graph();
  for(var i = 0; i < s1.length; i++){
    g1.addNode(s1[i]);
  }
  for(i = 0; i < s2.length; i++){
    g2.addNode(s2[i]);
  }
}
