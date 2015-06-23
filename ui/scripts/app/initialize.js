(function() {
	"use strict";

	var application = function() {

		var data = {
			dresses: [{
				dress: {
					name: "FLUTED HEM DRESS",
					type: "Summer Dress"
				},
				image: "1.jpg",
				price: {
					amount: "39",
					currency: {
						symbol: "$"
					}
				},
				sizes: ["XS", "S", "M", "L", "XL", "XXL"],
				colors: [{
					name: "Blue",
					class_name: "blue"
				}, {
					name: "Brown",
					class_name: "brown"
				}, {
					name: "White",
					class_name: "white"
				}, {
					name: "Green",
					class_name: "green"
				}]
			}, {
				dress: {
					name: "PLEAT PRINTED DRESS",
					type: "Summer Dress"
				},
				image: "2.jpg",
				price: {
					amount: "39",
					currency: {
						symbol: "$"
					}
				},
				sizes: ["XS", "S", "M", "L", "XL", "XXL"],
				colors: [{
					name: "Blue",
					class_name: "blue"
				}, {
					name: "Brown",
					class_name: "brown"
				}, {
					name: "White",
					class_name: "white"
				}, {
					name: "Green",
					class_name: "green"
				}]
			}, {
				dress: {
					name: "FLOWY SHIRT DRESS",
					type: "Summer Dress"
				},
				image: "3.jpg",
				price: {
					amount: "39",
					currency: {
						symbol: "$"
					}
				},
				sizes: ["XS", "S", "M", "L", "XL", "XXL"],
				colors: [{
					name: "Blue",
					class_name: "blue"
				}, {
					name: "Brown",
					class_name: "brown"
				}, {
					name: "White",
					class_name: "white"
				}, {
					name: "Green",
					class_name: "green"
				}]
			}, {
				dress: {
					name: "DOUBLE LAYER DRESS",
					type: "Summer Dress"
				},
				image: "4.jpg",
				price: {
					amount: "39",
					currency: {
						symbol: "$"
					}
				},
				sizes: ["XS", "S", "M", "L", "XL", "XXL"],
				colors: [{
					name: "Blue",
					class_name: "blue"
				}, {
					name: "Brown",
					class_name: "brown"
				}, {
					name: "White",
					class_name: "white"
				}, {
					name: "Green",
					class_name: "green"
				}]
			}, {
				dress: {
					name: "BEAD DETAIL DRESS",
					type: "Summer Dress"
				},
				image: "5.jpg",
				price: {
					amount: "39",
					currency: {
						symbol: "$"
					}
				},
				sizes: ["XS", "S", "M", "L", "XL", "XXL"],
				colors: [{
					name: "Blue",
					class_name: "blue"
				}, {
					name: "Brown",
					class_name: "brown"
				}, {
					name: "White",
					class_name: "white"
				}, {
					name: "Green",
					class_name: "green"
				}]
			}, {
				dress: {
					name: "PLEATED DETAIL DRESS",
					type: "Summer Dress"
				},
				image: "6.jpg",
				price: {
					amount: "39",
					currency: {
						symbol: "$"
					}
				},
				sizes: ["XS", "S", "M", "L", "XL", "XXL"],
				colors: [{
					name: "Blue",
					class_name: "blue"
				}, {
					name: "Brown",
					class_name: "brown"
				}, {
					name: "White",
					class_name: "white"
				}, {
					name: "Green",
					class_name: "green"
				}]
			}, {
				dress: {
					name: "PRINTED DRESS",
					type: "Summer Dress"
				},
				image: "7.jpg",
				price: {
					amount: "39",
					currency: {
						symbol: "$"
					}
				},
				sizes: ["XS", "S", "M", "L", "XL", "XXL"],
				colors: [{
					name: "Blue",
					class_name: "blue"
				}, {
					name: "Brown",
					class_name: "brown"
				}, {
					name: "White",
					class_name: "white"
				}, {
					name: "Green",
					class_name: "green"
				}]
			}, {
				dress: {
					name: "PRINTED DRESS",
					type: "Summer Dress"
				},
				image: "8.jpg",
				price: {
					amount: "39",
					currency: {
						symbol: "$"
					}
				},
				sizes: ["XS", "S", "M", "L", "XL", "XXL"],
				colors: [{
					name: "Blue",
					class_name: "blue"
				}, {
					name: "Brown",
					class_name: "brown"
				}, {
					name: "White",
					class_name: "white"
				}, {
					name: "Green",
					class_name: "green"
				}]
			}],
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

		/**
		 * function to get HTML content to print colors
		 * @param args JSON
		 *		colors: Array
		 * 		start Integer
		 * 		end Integer
		 *		noName boolean
		 * @return String html representation
		 */
		var getColorsHtml = function(args) {

			if (args == null || args.colors == null || args.start < 0 || args.start > args.end) {
				return "";
			}

			var htmlContent = "";
			for (var i = args.start; i < args.end; i++) {
				htmlContent += "<li>" + 
									"<a href=\"javascript:void(0)\">" + 
										"<div class=\"" + args.colors[i].class_name + "\"></div>" + ((args.noName !== true)?args.colors[i].name:"") + 
									"</a>" + 
								"</li>";
			}

			return htmlContent;
		};

		var initColors = function(colors) {
			var htmlContent = "<ul>";
			var colorsUl = getDomElement("colors");
			htmlContent += getColorsHtml({colors: colors, start: 0, end: colors.length/2}) + "</ul><ul>";
			htmlContent += getColorsHtml({colors: colors, start: colors.length/2, end: colors.length}) + "</ul>";

			colorsUl.innerHTML = htmlContent;
		};

		/**
		 * function to create html elements to be printed in UI for dresses
		 * @param dresses
		 */
		var initDresses = function(dresses) {

			if (dresses == null) {
				return;
			}

			var totalHTML = "<div class=\"row\">";
			var dressContainer = getDomElement("dressContainer");
			for (var i = 0; i < dresses.length; i++) {
				totalHTML +=	"<div class=\"col s4\">" +
									"<div class=\"row\">" +
										"<div class=\"col s12\">" +
											"<div class=\"card\" onmouseenter=\"onMouseOver({index: " + i + ", enter: true})\" onmouseleave=\"onMouseOver({index: " + i + "})\">" +
												"<div class=\"card-image\">" +
													"<img src=\"images/" + dresses[i].image + "\">" +
												"</div>" +
												"<div class=\"card-container\" id=\"cardContainer" + i + "\">" +
													"<div class=\"card-content\">" +
														"<p>" + dresses[i].dress.name + "</p>" +
														"<p>" +
															"<span class=\"dress-type\">" + dresses[i].dress.type + "</span>" +
															"<span class=\"dress-price\">" + dresses[i].price.currency.symbol + dresses[i].price.amount + "</span>" +
														"</p>" +
													"</div>" +
													"<div class=\"card-content\">" +
														"<p>Sizes</p>" +
														"<p>" +
															"<span class=\"dress-type\">" + dresses[i].sizes.join(", ") + "</span>" +
														"</p>" +
													"</div>" +
													"<div class=\"card-content colors\">" +
														"<p>Colors</p>" +
														"<p>" +
															"<span class=\"dress-type\">" + getColorsHtml({colors: dresses[i].colors, start: 0, end: dresses[i].colors.length, noName: true}) + "</span>" +
														"</p>" +
													"</div>" +
												"</div>" +
											"</div>" +
										"</div>" +
									"</div>" +
								"</div>";

				if (i % 3 === 2) {
					totalHTML += "</div><div class=\"row\">";
				}
			}

			if (i % 3 !== 0) {
				totalHTML += "</div>";
			}

			dressContainer.innerHTML = totalHTML;
		};

		/**
		 * function called when user hovers its mouse over a dress
		 * @param args
		 */
		window.onMouseOver = function(args) {

			if (args == null || args.index == null) {
				return;
			}

			var cardContainer = document.getElementById("cardContainer" + args.index);
			if (cardContainer != null) {
				if (args.enter === true && cardContainer.className.indexOf("open") === -1) {
					cardContainer.className += " open";
				} else {
					cardContainer.className = cardContainer.className.replace(/(?:^|\s)open(?!\S)/g, '');
				}
			}
		};

		return {
			init: function() {
				initSlider();
				initCategories(data.categories);
				initColors(data.colors);
				initSizes(data.sizes);
				initDresses(data.dresses);
			}
		}
	}();
	
	application.init();

}());

