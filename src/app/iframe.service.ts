import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IframeService {

  constructor() { }

  InitalizeIframe(gameName: string): string {
    return `<div>
<script src="https://cdn.htmlgames.com/embed.js?game=`+ gameName + `&amp;&amp;bgcolor=white"></script>
</div>
<script>
var nodes = document.getElementById('ZMgameDiv').childNodes;
for(var i=0;i<nodes.length;i++){
 if(nodes[i].childNodes.length>0){
   for(var id=0;id<nodes[i].childNodes.length;id++){
   if(nodes[i].childNodes[id].tagName=='IMG')nodes[i].childNodes[id].click();
     }
   }
if(nodes[i].innerText=='Play game'){
 nodes[i].style.display='none';
 }
}
</script>`;
  }
}
