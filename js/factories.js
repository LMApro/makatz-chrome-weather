angular.module("attWeatherFactories", [])
	
	.factory("DatetimeService", function(){
		return {
			vnDateName: ["Chủ Nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
			engDateName: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			engMonthName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		};
	})

	.factory("UserService", function(){
		var defaults = {
   		location: 'autoip'
   	};

   	var service = {
   		user: {},

      	save: function() {
      		localStorage.attweather = angular.toJson(service.user);
         },

         restore: function() {
      		// Pull from localStorage
      		service.user = angular.fromJson(localStorage.attweather) || defaults;

         	return service.user;
      	}
      };

      service.restore();
   	return service;
	});