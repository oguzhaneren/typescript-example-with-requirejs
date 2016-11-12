declare var require: any;
require.config({
    paths: {
        "knockout": "assets/vendors/knockout/knockout-3.4.1",
        "jquery": "assets/vendors/jquery/jquery-3.1.1.min",
        "bootstrap": "assets/vendors/bootstrap/js/bootstrap.min"
    },
    shim: {
        "bootstrap": {
            "deps": ['jquery']
        }
    }
});