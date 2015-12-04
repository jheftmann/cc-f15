console.log('hello world');

// access token = 974463.ff11de6.4fd9720c529340abaf67147de175b3ab
// user id = 974463

// by user ID
// $.ajax({
//   type: "GET",
//   dataType: "jsonp",
//   // user
//   url: "https://api.instagram.com/v1/users/974463/media/recent/?access_token=974463.ff11de6.4fd9720c529340abaf67147de175b3ab",
//   success: function(data) {
//     $('.name').text(data.data.username);
//     $('.tagline').text(data.data.bio);
//     for (var i = 0; i < 100; i++) {
//     $(".pics").append("<a target='_blank' href='" + data.data[i].link +
//     "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
//     }
//   }
// });

// by location ID
$.ajax({
	type: "GET",
	dataType: "jsonp",
	// user
	url: "https://api.instagram.com/v1/locations/1015136506/media/recent?access_token=974463.ff11de6.4fd9720c529340abaf67147de175b3ab",
	success: function(data) {
				for (var i = 0; i < 100; i++) {
				$(".pics").append("<a target='_blank' href='" + data.data[i].link +
				"'><img src='" + data.data[i].images.low_resolution.url +"'></img></a><p>Comments: </p>");
				}
	}
});
