import {
	Component, 
	View,
	bootstrap
} from 'angular2/angular2';


@Component({
    selector: 'rot13'
})
@View({
	template:
	`<div class="control-group">
		<div><label>Text:</label></div>
        <div><input name="source" #source></div>
        <div><button (click)="decode(source)">Decode</button></div>
    </div>
	<div class="control-group">
		<div><label>Decoded:</label></div>
		<div><span>{{ rot13 }}</span></div>
    </div>`
})
class Rot13 {
    rot13: string;

    decode(source) {
        console.log("Decode", source.value);
        this.rot13 = "rot13";
    }
}

@Component({
    selector: 'textcalc'
})
@View({
    directives: [Rot13],
	template:
	`<div>
		<h1>Rot13 decoder</h1>
		<rot13></rot13>
    </div>`
})
class TextCalcApp {
}


bootstrap(TextCalcApp)