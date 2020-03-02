class auto{
    constructor(brandName, model, productionYear){
        this.brandName = brandName;
        this.model = model;
        this.productionYear = productionYear;
    }
};

var myAuto = _.create(auto.prototype,[
    {
        brandName: 'Audi',
        model: 'R8 GT',
        productionYear: 2010
    },
    {
        brandName: 'Citroen',
        model: 'Berlingo',
        productionYear: 2020
    },
    {
        brandName: 'Ferrari',
        model: 'F458',
        productionYear: 2015
    },
    {
        brandName: 'Mercedes-Benz',
        model: 'G-Class',
        productionYear: 2005
    },
    {
        brandName: 'Suzuki',
        model: 'Grand Vitara',
        productionYear: 2017
    }
    ]);
console.log(myAuto);

function dataHTML(idName){
    document.getElementById(idName).innerHTML = textHTML;
}
var textHTML = '';
_.each(myAuto, function (data) {
    textHTML += ' виробник :  ' + data.brandName + '  модель :' + data.model + '  рік випуску : ' + data.productionYear + '<br>'

});
dataHTML("colection");

//
var inverteObject = {};
var textHTML = '';
var i = 0;
_.each(myAuto, function(data){
    inverteObject[i] = _.invert(data);
    textHTML += JSON.stringify(inverteObject[i])+'<br>';
    i++;
});
dataHTML("inverteObject");
console.log(inverteObject);

//
var pickObject = {};
var textHTML = '';
var i = 0;
_.each(myAuto, function(data){
    pickObject[i] = _.pick(data, 'brandName', 'productionYear');
    textHTML += JSON.stringify(pickObject[i])+'<br>';
    i++;
});
console.log(pickObject);
dataHTML("pickObject");

//
var omitObject = _.omit(myAuto, 'model');
var textHTML = '';
var i = 0;
_.each(myAuto, function(data){
    omitObject[i] = _.omit(data, 'model');
    textHTML += JSON.stringify(omitObject[i])+'<br>';
    i++;
});
console.log(omitObject);
dataHTML("omitObject");





/*
function showDate(data, isDisplay) {
    if (isDisplay) {
        console.log(data);
    }
}
var  ObjectTest = {name:'John', age:22};

//keys
var  keysObject = _.keys(ObjectTest);
showDate(keysObject, false);

//values
var valuesObject = _.values({name:'John', age:22});
showDate(valuesObject, false);

//
var mapObject = _.mapObject({name:'John', age:22}, function(value, key){
    return value + 1;
});
showDate(mapObject, false);

//
var pairsValues = _.pairs(ObjectTest);
showDate(pairsValues, false);

//
var inverteObject = _.invert(ObjectTest);
showDate(inverteObject, false);

//create
function person(name){
    this.name = name;
}
var create = _.create(person.prototype, {name:'Oleg',age: 20});
showDate(create, false);

//functions ++++
showDate(_.functions(_), false);

//extend
var extendedObject = _.extend({name:'Jone'},{age:25});
showDate(extendedObject, false);

//pick
var pickObject = _.pick(ObjectTest, 'name');
showDate(pickObject, false);

//
var omitObject = _.omit(ObjectTest, 'name');
showDate(omitObject, false);

//
var defaultsObject = _.defaults({isPerson:true}, ObjectTest);
showDate(defaultsObject, false);

//has
var hasKays = _.has(ObjectTest, 'name');
showDate(hasKays, false);

//isEqual
var isEqualObj = _.isEqual(ObjectTest, {});
showDate(isEqualObj, false);

//
var isMatch = _.isMatch(ObjectTest,{age: 23});
showDate(isMatch, false);

//
var isEmptyObj = _.isEmpty({});
showDate(isEmptyObj, false);

//\

var isElemetnDont = _.isElement(document.createElement("div"));
showDate(isElemetnDont, false);

//
var isArray = _.isArray([]);
showDate(isArray,false);

//
showDate(_.isObject(new String),false);

//
showDate(_.isFunction(_.isArray), false);

//
showDate(_.isFinite(Infinity), false);

//
showDate(_.isBoolean(2>3), false);

//
showDate(_.isDate(new Date), false);

//
showDate(_.isNaN(NaN), true);

//
showDate(_.isNull(0), true);

//
showDate(_.isUndefined(undefined), true);
*/




