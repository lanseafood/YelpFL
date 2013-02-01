$(document).ready(function(){
	var counter = [0, 0, 0];
	var clone = false;
	
	function review(name,ratingCount,stars,blurb,comment, image)
	{
		this.name=name;
		this.ratingCount=ratingCount;
		this.stars=stars;
		this.blurb=blurb;
		this.comment=comment;
		this.image = image;
	}

	var review1 = new review("Gather", "700+ reviews", "https://s3.amazonaws.com/trycaviar.com/yelp/stars_4.png", "so good, I can't believe it's Vegan", "Kate: Small portions, excellent tasting, but pricey!", 'leftfood.png');
	var review2 = new review("Cheeseboard", "200+ reviews", "https://s3.amazonaws.com/trycaviar.com/yelp/stars_4.png", "for the hipster in you", "Mary: Every Berkeley student knows about Cheeseboard", 'left2.png');
	var review3 = new review("Rivoli's", "500 reviews", "https://s3.amazonaws.com/trycaviar.com/yelp/stars_4.png", "dinner and a view", "Andy: Service is attentive; nice view of a small outside garden", 'left3.png');
	var review4 = new review("Venus", "600+ reviews", "https://s3.amazonaws.com/trycaviar.com/yelp/stars_4.png", "to the stars and back", "Judy: Very solid dinner spot in Berkeley", 'middlefood.png');
	var review5 = new review("Saturn", "400+ reviews", "https://s3.amazonaws.com/trycaviar.com/yelp/stars_4.png", "we're bringing the 70's back", "Jayson: Steak cut fries are really crispy on the outside", 'middle2.png');
	var review6 = new review("Jupiter", "1500+ reviews", "https://s3.amazonaws.com/trycaviar.com/yelp/stars_4.png", "bigger is better", "Cory: Great pizza, awesome beer, live music on the patio.", 'middle3.png');
	var review7 = new review("Boiling Crab", "700+ reviews", "https://s3.amazonaws.com/trycaviar.com/yelp/stars_4.png", "get the shrimp", "Claire: I think I'm hooked on their awesome sauce!!", 'rightfood.png');
	var review8 = new review("FIVE", "800+ reviews", "https://s3.amazonaws.com/trycaviar.com/yelp/stars_4.png", "to the high, oh yea", "June: The crab fritters are my favorite appetizer.", 'right2.png');
	var review9 = new review("Pluto's", "900+ reviews", "https://s3.amazonaws.com/trycaviar.com/yelp/stars_4.png", "try more, can't help but camwhore", "James: Don't forget to order the famous garlic fries.", 'right3.png');

	var array1 = [review1, review2, review3];
	var array2 = [review4, review5, review6];
	var array3 = [review7, review8, review9];

	function incrementCount(count, length){
		counter[count]++;
		if(counter[count]>=length){
			counter[count] = 0;
		}
	}

	function transition(image, count, array){
		incrementCount(count, array.length);
		var c = counter[count];
		var c2 = (c+1)%3;
		var arrayObj = array[c];
		var arrayObjNext = array[c2];
		var urlc = arrayObjNext.image;
		var top;
		var bottom;
		if(clone){
			top = $(image).children(".food_img");
			bottom = $(image).children(".clone_img");

			top.fadeOut(1000, function(){
				//top.css('z-index','1');
				top.attr('src',urlc);
				bottom.css('opacity','1');
				bottom.css('z-index','0');
				top.fadeIn();
			});
		}else{
			top = $(image).children(".clone_img");
			bottom = $(image).children(".food_img");

			top.fadeOut(1000, function(){
				//top.css('z-index','1');
				top.css('opacity','0');
				top.css('z-index','-1');
				top.css('opacity','1');
				top.attr('src',urlc);
				top.fadeIn();
			});
		}

		var new_name = arrayObj.name;
		var new_ratingCount = arrayObj.ratingCount;
		var new_stars = arrayObj.stars;
		var new_blurb = arrayObj.blurb;
		var new_comment = arrayObj.comment;
		$(image).find(".name").html(new_name);
		$(image).find(".ratingCount").html(new_ratingCount);
		$(image).find(".stars").attr('src', new_stars);
		$(image).find(".blurb").html(new_blurb);
		$(image).find(".comment").html(new_comment);
	}
	
	function runScript(){
		var image1 = "#image1";
		var image2 = "#image2";
		var image3 = "#image3";
		if(clone){
			clone = false;
		}else{
			clone = true;
		}
		setTimeout(function(){transition(image1, 0, array1);}, 1500);
		setTimeout(function(){transition(image2, 1, array2);}, 3000);
		setTimeout(function(){transition(image3, 2, array3);}, 4500);
	}

	function setUp(){
		runScript();
		setInterval(function(){runScript();},6000);
	}

	setTimeout(function(){setUp();}, 1000);
});