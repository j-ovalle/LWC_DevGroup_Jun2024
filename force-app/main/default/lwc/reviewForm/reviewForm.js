import { LightningElement } from 'lwc';

export default class ReviewForm extends LightningElement {
    reviewer;
    feedback;
    showPreview = false;

    handleReviewerChange(event) {
        this.reviewer = event.target.value;
    }

    handleFeedbackChange(event) {
        this.feedback = event.target.value;
    }

    handleSave() {
        this.showPreview = true;
    }
}