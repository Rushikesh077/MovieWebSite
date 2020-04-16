'use strict';
/*
     created by krushnakumar nalange on 19 aug 2017 
 */

bookMovieApp.controller('BookMovieAppCtrl' , function($scope,$http){
	
	$scope.lati = '' ;
	
	window.onload = function(){
		
		    if (navigator.geolocation) {
		    	
		        navigator.geolocation.getCurrentPosition(showPosition);
		    } else { 
		        
		       alert("locatin didn't supported");
		    }
		

		
		
	}
	
	function showPosition(position) {
		$scope.lati = "hi" ;
	}
	
	 
	
});
