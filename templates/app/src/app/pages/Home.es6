import BasePage from 'mo/pages/Base';
import modal from 'mo/modal';
import pages from 'mo/pages';

module.exports = class extends BasePage {
    constructor(name, viewClass) {
        super(name, viewClass, {
            // View events go here.
        });
    }

    // Hooks go here.
    
    onBeforeShow() {
        this.view.update({
            date: new Date().toString().match(/\d{2}:\d{2}:\d{2}/)[0]
        });

        modal.show('info', 'You need to sign in!');

        setTimeout(pages.back, 2000);
    }

    onShow() {
    }

    onBeforeHide() {
        modal.hide('info');
    }

    onHide() {
    }
};