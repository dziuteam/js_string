var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
animal = animal.toUpperCase();
console.log(animal);
console.log(text);
text = text.replace('Papugi', animal);
console.log(text);
console.log(text.length);
var textHalfChars = text.substr((text.length)/2);
console.log(textHalfChars); 