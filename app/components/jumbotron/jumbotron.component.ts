import { Component } from '@angular/core';
@Component({
	moduleId: module.id,
	selector: 'jumbotron',
	templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
	private jbtHeading: string;
	private jbtText: string;
	private jbtBtnText: string;
	private jbtBtnUrl: string;

	constructor() {
		this.jbtHeading = "Hello World";
		this.jbtText = "Glossier copper mug helvetica, lo-fi marfa you probably haven't heard of them keytar. Lumbersexual lyft food truck tattooed swag intelligentsia, jean shorts small batch pug post-ironic health goth sartorial synth cardigan flexitarian. ";
		this.jbtBtnText = "Read More";
		this.jbtBtnUrl = "/about";
	}
}
