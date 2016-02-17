/**
 * Created by Volkovlad on 17.02.2016.
 */

var Singleton = (function () {
    var instance;
    //private constructor
    function init() {
        // singleton here
        return {
            publicMethod: function () {
                console.log('hello world');
            },
            publicProperty: 'public'
        };
    };

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

Singleton.getInstance().publicMethod();