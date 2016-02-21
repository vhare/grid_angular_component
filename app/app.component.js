System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HEROES, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HEROES = [
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
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Grid Master';
                    this.grid = {
                        row: 0,
                        col: 0,
                    };
                    this.getNumber = function (num) {
                        if (parseInt(num)) {
                            return new Array(parseInt(num));
                        }
                        else {
                            return [];
                        }
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<h1 class=\"text\">{{title}}</h1>\n    \t<h2 class=\"text\">{{grid.row}} by {{grid.col}} grid</h2>\n    \t<div>\n    \t\t<div><input [(ngModel)]=\"grid.row\" placeholder=\"name\"><span class=\"text\"> by </span><input [(ngModel)]=\"grid.col\" placeholder=\"name\"></div>\n    \t\t<table>\n    \t\t\t<tr *ngFor=\"#row of getNumber(grid.row)\">\n    \t\t\t\t<td *ngFor=\"#col of getNumber(grid.col)\"></td>\n    \t\t\t</tr>\n    \t\t</table>\n    \t</div>\n    ",
                        styles: ["\n    \t.text {\n    \t\tfont-family: Avenir;\n    \t\ttext-align: center;\n    \t}\n    \ttd {\n    \t\tbackground-color:grey; \n    \t\tpadding:10px\n    \t}\n    \tdiv {\n    \t\twidth: 50%;\n    \t\tmargin: 0 auto; \n    \t}\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map