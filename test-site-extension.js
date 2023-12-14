// example-app.js (This would be hosted on a CDN)
(function (global) {
    // The library's functionality is encapsulated within this function
    function TheKittyfierApp() {
        // Private properties and methods
        var privateVariable = 'I am private';

        function privateMethod() {
            console.log(privateVariable);
        }

        // Public API
        return {
            initialize: function ({ config, pageMetaData }) {
                console.log('kittiyfier is being set up.');
                console.log('config', config);
                console.log('pageMetaData', pageMetaData);
                privateMethod();
                return true;
            },
            onEvent: function ({ event, data }) {
                switch (event) {
                    default:
                        console.log(`${event} has been triggered.`, data);
                        return;
                }
            }
        };
    }

    // Expose the library to the global object (e.g., window in the browser)
    global.kittyfier = TheKittyfierApp();

}(this));

