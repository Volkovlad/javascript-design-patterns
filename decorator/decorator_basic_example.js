/**
 * Created by Volkovlad on 18.02.2016.
 */
function Guitar( guitarBrand ){
    // properties and defaults
    this.guitarBrand = guitarBrand,
    this.model = 'default',
    this.license = '00000-000'
}
// Test instance for a basic guitar
var testInstance = new Guitar('Fender');
console.log(testInstance);

var jacksonGuitar = new Guitar('Jackson');
// New functionality we're decorating guitar with
jacksonGuitar.setModel = function( modelName ){
    this.model = modelName;
};
jacksonGuitar.setColor = function( color ){
    this.color = color;
};
// Test the value setters and value assignment works correctly
jacksonGuitar.setModel('Flying V');
jacksonGuitar.setColor('black');

console.log(jacksonGuitar);

// Demonstrate 'guitar' is still unaltered
var secondInstance = new Guitar('Dean');
console.log(secondInstance);