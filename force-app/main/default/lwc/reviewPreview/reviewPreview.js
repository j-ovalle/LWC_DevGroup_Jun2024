import { LightningElement, api } from 'lwc';

export default class ReviewPreview extends LightningElement {
    @api reviewer;
    @api feedback;
}