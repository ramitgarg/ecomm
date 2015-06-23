(function() {
	"use strict";

	var application = function() {

		var data = {
			sizes: [{
				id: "xs",
				value: "XS"
			}, {
				id: "s",
				value: "S"
			}, {
				id: "m",
				value: "M"
			}, {
				id: "l",
				value: "L"
			}, {
				id: "xl",
				value: "XL"
			}, {
				id: "xxl",
				value: "XXL"
			}],
			colors: [{
				name: "Beige",
				class_name: "beige"
			}, {
				name: "Black",
				class_name: "black"
			}, {
				name: "Blue",
				class_name: "blue"
			}, {
				name: "Brown",
				class_name: "brown"
			}, {
				name: "Green",
				class_name: "green"
			}, {
				name: "Grey",
				class_name: "grey"
			}, {
				name: "Orange",
				class_name: "orange"
			}, {
				name: "Purple",
				class_name: "purple"
			}, {
				name: "Red",
				class_name: "red"
			}, {
				name: "White",
				class_name: "white"
			}],
			categories: [{
				id: "new_arrival",
				value: "New Arivals"
			}, {
				id: "accessories",
				value: "Accessories"
			}, {
				id: "bags",
				value: "Bags"
			}, {
				id: "dressed",
				value: "Dressed"
			}, {
				id: "jackets",
				value: "Jackets"
			}, {
				id: "jewelry",
				value: "Jewelry"
			}, {
				id: "shoes",
				value: "Shoes"
			}, {
				id: "shirts",
				value: "Shirts"
			}, {
				id: "sweaters",
				value: "Sweaters"
			}, {
				id: "t_shirtsl",
				value: "T Shirts"
			}]
		};

		var initSlider = function() {
			$('.button-collapse').sideNav();
			$('.slider').slider({full_width: true});
		};

		var getDomElement = function(id) {
			var item = document.getElementById(id);
			if (item == null) {
				item = {};
			}

			return item;
		};

		var getCheckBoxHtml = function(item) {

			if (item == null) {
				return "";
			}

			return "<input type=\"checkbox\" id=\"" + item.id + "\" />" +
					"<label for=\"" + item.id + "\">" + item.value + "</label>"
		};

		var initCategories = function(categories) {
			var htmlContent = "<ul>";
			var categoriesUl = getDomElement("categories");
			for (var i = 0; i < categories.length; i++) {
				htmlContent += "<li>" + getCheckBoxHtml(categories[i]) + "</li>";
			}

			categoriesUl.innerHTML = htmlContent + "</ul>";
		};

		var initSizes = function(sizes) {
			var htmlContent = "<ul>";
			var categoriesUl = getDomElement("sizes");
			for (var i = 0; i < sizes.length/2; i++) {
				htmlContent += "<li>" + getCheckBoxHtml(sizes[i]) + "</li>";
			}

			htmlContent += "</ul><ul>";

			for (var i = sizes.length/2; i < sizes.length; i++) {
				htmlContent += "<li>" + getCheckBoxHtml(sizes[i]) + "</li>";
			}

			categoriesUl.innerHTML = htmlContent + "</ul>";
		};

		var initColors = function(colors) {
			var htmlContent = "<ul>";
			var colorsUl = getDomElement("colors");
			for (var i = 0; i < colors.length/2; i++) {
				htmlContent += "<li>" + 
									"<a href=\"javascript:void(0)\">" + 
										"<div class=\"" + colors[i].class_name + "\"></div>" + colors[i].name + 
									"</a>" + 
								"</li>";
			}

			htmlContent += "</ul><ul>"

			for (var i = colors.length/2; i < colors.length; i++) {
				htmlContent += "<li>" + 
									"<a href=\"javascript:void(0)\">" + 
										"<div class=\"" + colors[i].class_name + "\"></div>" + colors[i].name + 
									"</a>" + 
								"</li>";
			}

			colorsUl.innerHTML = htmlContent + "</ul>";
		};

		return {
			init: function() {
				initSlider();
				initCategories(data.categories);
				initColors(data.colors);
				initSizes(data.sizes);
			}
		}
	}();
	
	application.init();

}());