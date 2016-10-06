'use strict';

function getMessage(a, b) {
	if (typeof a === "boolean") {
		if (a === true) {
			return "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
		} else {
			return "Переданное GIF-изображние не анимировано";
		}
	} else if (typeof a === "number") {
		return "Переданное SVG-изображение содержит " + a + " объектов и " + b * 4 + " атрибутов";
	} else if (Array.isArray(a) && Array.isArray(b)) {
		var artifactsSquare = 0;
		
		for (var i = 0; i < a.length; i++) {
			artifactsSquare += a[i] * b[i]
		}
				 
		return "Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей"
	} else if (a.splice) {
		var amountOfRedPoints = 0;
			
		for (i = 0; i < a.length; i++) {
			amountOfRedPoints += a[i];
		}
			
		return "Количество красных точек во всех строчках изображения: " + amountOfRedPoints;
		} else {
			return "Переданы некорректные данные"
		} 
}