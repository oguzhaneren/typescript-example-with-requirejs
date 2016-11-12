import * as ko from "knockout";
import * as $ from "jquery";
import * as bs from "bootstrap";

import HelloViewModel from "./hello/HelloViewModel";



ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"));
var bootstra = bs; // for loading bootstrap
