var url = 'https://congress.api.sunlightfoundation.com/legislators?apikey=c08a60c041f24311b98b7ef7108628d6' //this is step 1
// we want to get the JSON from the website by using $.getJSON and assigning the 'url' as the parameters
// we want to name the var 'promise' because we will let the js know what to do with the data once the data is retrieved in the future 
var promise = $.getJSON(url) // this is step 2
infoCardNode = document.querySelector('.infoCard')

//now it is time to write the function that establishes what we should do with our data once we have it.


	var peopleToHTML = function (objectData){ //the peopleToHTML function is written 
		//after you determine how you want the response handler to handle the response
		var htmlString = ''  // you create an empty html string to push the inner html into 
		for(var i = 0; i<objectData.length; i ++){ // for every
			//condensing objectData[i] down to resultsDetails for convience 
			var resultsDetails = objectData[i] 
			console.log(resultsDetails) // this split the array of objects into individual objects so that I can now access the results
			//now its time to write the information to be put into the html string which will disply on the screen
			//open div and give it class people
			htmlString += '<div class = "person">'
			//start adding in the different lines of information. 
			//Notice the dot notation to call the first name property inside the results array
			htmlString += '<h1>' + resultsDetails.title + ' ' + resultsDetails.first_name + ' ' + resultsDetails.last_name + '</h1>'
			htmlString += '<h2>' + resultsDetails.state_name + '</h2>'
			htmlString += '<h3>' + resultsDetails.phone + '</h3>'
			htmlString += '<h4>' + resultsDetails.oc_email + '</h4>' 
			htmlString += '<h5>' + resultsDetails.website + '</h5>'
			htmlString += '</div>'
		}
		return htmlString

	}


	var handleResponse = function (someResponseData){ //establishing this function is step 3
	// console.log(someResponseData)
	//grab the 20 objects that are within the results array
		var resultsObjArray = someResponseData.results //grabbing the results is the 4th step
		// console.log(resultsObjArray) //this console.log shows me that we now have the 20 objects
		//now I'm thinking that we have to use a for loop to go throught the array to pick out specific data
		htmlString = '<h1> House Bills </h1>' + peopleToHTML(objectData)
		infoCardNode.innerHTML = htmlString
	}


promise.then(handleResponse)

console.log("hi people")

