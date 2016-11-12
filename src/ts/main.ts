import * as ko from "knockout";
import * as $ from "jquery";
import * as bs from "bootstrap";

class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(language: string, framework: string) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
    }
}

ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"));
var bootstra = bs; // for loading bootstrap
