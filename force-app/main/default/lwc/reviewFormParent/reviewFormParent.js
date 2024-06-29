import { LightningElement, api, wire } from 'lwc';
import { getRecord, createRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Movie__c.Name';

export default class ReviewFormWithSubmit extends LightningElement {
    @api recordId;
    reviewer;
    feedback;
    showPreview = false;

    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD] })
    movie;

    get title() {
        return getFieldValue(this.movie.data, NAME_FIELD) + ' Review Form';
    }

    handleReviewerChange(event) {
        this.reviewer = event.target.value;
    }

    handleFeedbackChange(event) {
        this.feedback = event.target.value;
    }

    handleSave() {
        this.showPreview = true;
    }

    handleSubmit() {
        this.submitReview();
    }

    async submitReview() {
        const review = { apiName: 'Review__c', fields: {
            Reviewer__c: this.reviewer,
            Feedback__c: this.feedback,
            Movie__c: this.recordId
        }};
        await createRecord(review);
        this.resetForm();
    }

    resetForm() {
        this.reviewer = null;
        this.feedback = null;
        this.showPreview = false;
    }
}
