$(document).ready(function() {
   //treehouse username
  
  /* get treehouse profile info via JSON */
  $.getJSON("https://jsonplaceholder.typicode.com/users", function(data) { 
    console.log(data);// intialize list
    $(".badges").html('<div>');
    var output = "";
    /* loop through the JSON, parse out badge name & icon
    wrap it in some HTML. */    
    for (var i in data) {
   


		
		output += "    <div class='swiper-slide'style=''>"
		output += "       <div class='d-block w-55 justify-content-center'>"
		output += "          <div class='justify-content-center d-flex'>"
		output += "             <div class='justify-content-center align-items-center w-75 justify-content-center d-flex  '> "
		output += "                <img src='img/images/user-1.png 'style='width: 60%;h;border: 2px solid white' class='rounded-circle'>"
		output += "             </div>"
		output += "          </div>"
		output += "          <div>"
		output += "             <div id = 'badges'>" + data[i].name + "</div>"
		output += "          </div>"
		output += "          <div style='border-top: 1px solid white'>"
		output += "             <p class='text-light font-weight-bold'>"
		output += "                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> "
		output += "                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
		output += "             </p>"
		output += "          </div>"
		output += "       </div>"
		output += "    </div>"
		




    }
    $(".badges ").append(output); // append li
    $(".badges ").append('</div>'); // close list
    
    /* hide spinner and then output HTML we built in the for loop */
    $(".spinner").hide();
  });
});




/***** But how does JSON work exactly *****

The magic here happens in the for loop over "data.badges". The "data" part, comes from the variable name we passed the function when we called the getJSON function and the "badges" part comes from the structure of the JSON data that the Treehouse API returned to us. 
    
How do you know what the structure of that JSON is? 

You look at it using a JSON viewer like the one at jsonviewer.stack.hu. To see what the JSON looks like that we are getting in this example go here: http://jsonviewer.stack.hu/#http://teamtreehouse.com/jamesbarnett.json and click on the 'viewer tab' 

**********/
