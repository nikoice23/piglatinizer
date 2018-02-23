// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  $("#go").click(function() {
    var userSays = $("#input3").val();
    $("#message").text(userSays);

function hello(sentence){   
 var hello =sentence.slice(0,1);
                                    


});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
  $("#submit").click(function(){
        var nameInitials = "";
        var fullName = $('#yourName').val();
        var nameArray = fullName.split(" ");
        
        for(var i = 0; i < nameArray.length; i++){
           
        var initial = name.slice (0,1);
           
       nameInitials = nameInitials + initial + "."
            ;
            
        }
 $(".result").append(nameInitials);
        
    });
 
});





// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


