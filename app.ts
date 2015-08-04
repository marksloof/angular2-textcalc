import { Component, View, bootstrap } from 'angular2/angular2';
import { formDirectives, FormBuilder, Control, ControlGroup } from 'angular2/angular2';
import { NgIf, Validators } from 'angular2/angular2';

import { TextCalc } from 'textcalc';

@Component({
    selector: 'rot13',
    viewInjector: [FormBuilder]
})
@View({
directives: [formDirectives,NgIf],
	template: `
    <form [ng-form-model]="myForm"
          (submit)="decode(myForm.value)">
        <div class="control-group">
            <div><label for="rot13Input">Text:</label></div>
            <div>
                <input
                    type="text"
                    id="rot13Input"
                    [ng-form-control]="myForm.controls['rot13Input']">
            </div>
            <div *ng-if="myForm.valid"><button type="submit">Decode</button></div>
            <div *ng-if="!myForm.valid">Text is required</div>
        </div>
        <div class="control-group">
            <div><label>Decoded:</label></div>
            <div><span>{{ rot13 }}</span></div>
        </div>
    </form>
    `
})
class Rot13 {
    myForm: ControlGroup;
    rot13Input: Control;
    rot13: string;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            "rot13Input": ["", Validators.required]
        });
        this.rot13Input = this.myForm.controls["rot13Input"];
        this.rot13 = "";
    }

    decode(formData) {
        var textcalc = new TextCalc();
        this.rot13 = textcalc.rot13(formData.rot13Input);
    }
}

@Component({
    selector: 'app'
})
@View({
    directives: [Rot13],
	template: `
    <h1>TextCalc</h1>
    <h2>Rot13 decoder</h2>
    <rot13></rot13>
    <h2>Woord waarde</h2>
    `
})
class TextCalcApp {
}

bootstrap(TextCalcApp)