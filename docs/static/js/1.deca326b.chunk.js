(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{19:function(e,n,i){"use strict";i.r(n),i.d(n,"snippet",function(){return t}),i.d(n,"steps",function(){return c});var t="function main() {\n\tfetch('https://some-api.com/').then(() => {\n\t\tconsole.log('Well received');\n\t});\n\n\tsetTimeout(() => {\n\t\tconsole.log('timeout');\n\t}, 500)\n\n\tfetch('https://other-api.com/').then(() => {\n\t\tconsole.log('Also Well received');\n\t});\n}\n\nmain();\n  ",c={1:{line:15,funcName:"main"},2:{line:2,funcName:"fetch 1",action:"add-apis"},3:{line:5},4:{line:6,funcName:"setTimeout",action:"add-apis"},5:{line:9,action:"remove-apis"},6:{line:9,action:"enqueue-micro",funcName:"fetch cb 1"},7:{line:9,action:"remove-apis"},8:{line:9,funcName:"timeout cb",action:"enqueue"},9:{line:10,funcName:"fetch 2",action:"add-apis"},10:{line:12,action:"remove-apis"},11:{line:12,action:"enqueue-micro",funcName:"fetch cb 2"},12:{line:15},13:{line:16,action:"pop"},14:{line:3,action:"dequeue-micro",funcName:"fetch cb 1"},15:{line:16,action:"pop"},16:{line:11,action:"dequeue-micro",funcName:"fetch cb 2"},17:{line:16,action:"pop"},18:{line:7,action:"dequeue",funcName:"timeout cb"},19:{line:16,action:"pop"}}}}]);
//# sourceMappingURL=1.deca326b.chunk.js.map