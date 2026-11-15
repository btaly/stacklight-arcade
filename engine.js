export const SHAPES=[[[1,1,1,1]],[[2,2],[2,2]],[[0,3,0],[3,3,3]],[[0,4,4],[4,4,0]],[[5,5,0],[0,5,5]],[[6,0,0],[6,6,6]],[[0,0,7],[7,7,7]]];
export class Game {
 constructor(random=Math.random){this.random=random;this.reset()}
 piece(){return SHAPES[Math.floor(this.random()*SHAPES.length)].map(row=>[...row])}
 reset(){this.board=Array.from({length:20},()=>Array(10).fill(0));this.score=0;this.lines=0;this.level=0;this.over=false;this.next=this.piece();this.spawn()}
 spawn(){this.shape=this.next;this.next=this.piece();this.x=Math.floor((10-this.shape[0].length)/2);this.y=0;if(!this.valid(this.shape,this.x,this.y))this.over=true}
 valid(shape,x,y){return shape.every((row,dy)=>row.every((v,dx)=>!v||(x+dx>=0&&x+dx<10&&y+dy<20&&(y+dy<0||!this.board[y+dy][x+dx]))))}
 move(dx,dy){if(this.over||!this.valid(this.shape,this.x+dx,this.y+dy))return false;this.x+=dx;this.y+=dy;return true}
 rotate(dir){const s=this.shape;const rotated=Array.from({length:s[0].length},(_,y)=>Array.from({length:s.length},(_,x)=>dir>0?s[s.length-1-x][y]:s[x][s[0].length-1-y]));if(this.valid(rotated,this.x,this.y)){this.shape=rotated;return true}return false}
 tick(){if(this.move(0,1))return 'move';for(let y=0;y<this.shape.length;y++)for(let x=0;x<this.shape[y].length;x++)if(this.shape[y][x]&&this.y+y>=0)this.board[this.y+y][this.x+x]=this.shape[y][x];let count=0;for(let y=19;y>=0;y--)if(this.board[y].every(Boolean)){this.board.splice(y,1);this.board.unshift(Array(10).fill(0));count++;y++}this.score+=([0,40,100,300,1200][count]||0)*(this.level+1);this.lines+=count;this.level=Math.floor(this.lines/10);this.spawn();return this.over?'over':count?'clear':'lock'}
 interval(){const frames=[48,43,38,33,28,23,18,13,8,6,5,5,5,4,4,4,3,3,3,2];return (frames[Math.min(this.level,19)]||1)*1000/60}
}
