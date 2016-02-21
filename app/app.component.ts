import {Component} from 'angular2/core';

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

interface Grid {
	row: number;
	col: number;
	color: string;
}


@Component({
    selector: 'my-app',
    template:`
    	<h1 class="text">{{title}}</h1>
    	<h2 class="text">{{grid.row}} by {{grid.col}} grid</h2>
    	<div>
    		<div><input [(ngModel)]="grid.row" placeholder="name"><span class="text"> by </span><input [(ngModel)]="grid.col" placeholder="name"></div>
    		<table>
    			<tr *ngFor="#row of getNumber(grid.row)">
    				<td *ngFor="#col of getNumber(grid.col)"></td>
    			</tr>
    		</table>
    	</div>
    `,
    styles:[`
    	.text {
    		font-family: Avenir;
    		text-align: center;
    	}
    	td {
    		background-color:grey; 
    		padding:10px
    	}
    	div {
    		width: 50%;
    		margin: 0 auto; 
    	}
    `]
})

export class AppComponent { 
	public title = 'Grid Master'
	public grid : Grid = {
		row : 0,
		col: 0,
	}	
	public getNumber = function(num) {
		if (parseInt(num)) {
			return new Array(parseInt(num)); 
		} else {
			return [];
		}
	}
}


