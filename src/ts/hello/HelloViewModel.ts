import * as ko from "knockout";

export default  class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>
    x :any

    constructor(language: string, framework: string) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
        this.x = (y:any)=>{
            console.log(y);
        }
    }
}

