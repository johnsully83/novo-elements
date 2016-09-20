// NG2
import { ElementRef } from '@angular/core';
// App
import { NovoToastService } from './../elements/toast/ToastService';
import { NovoLabelService } from './../services/novo-label-service';
import { ComponentUtils } from './../utils/component-utils/ComponentUtils';

class MockElementRef {
    nativeElement:HTMLDivElement = document.createElement('div');

    constructor() {
        this.nativeElement.querySelector = () => {
            return document.createElement('div');
        };
    }
}

export const APP_TEST_PROVIDERS = [
    { provide: ElementRef, useClass: MockElementRef },
    { provide: NovoToastService, useClass: NovoToastService },
    { provide: ComponentUtils, useClass: ComponentUtils },
    { provide: NovoLabelService, useClass: NovoLabelService }
];
