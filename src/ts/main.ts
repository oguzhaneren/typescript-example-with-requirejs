import * as ko from "knockout";
import * as $ from "jquery";

class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(language: string, framework: string) {
        this.language(language);
        this.framework(framework);
    }
}

ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"));