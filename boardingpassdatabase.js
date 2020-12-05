const airlineInput = $("#airline_input");
const destinationInput = $("#destination_input");
const latestChcocolateVote = $("#latest_vote");
const submitNewButton = $("#add_to_collection_button");
const boardingPassOutput = $("#boarding_pass_ouput");

//Connect to firebase and store in variable firebase
var firestore = firebase.firestore();
const databaseDocumentRef = firestore.doc("boardingpasses/airlinesInAsia");


function additionSuccess() {
  console.log("Added successfully!");
}

function generalErrorHandler(error) {
    console.log("Got an error", error);
};

function addToCollection() {
    console.log('submitting new boardng pass: ' + airlineInput.val() + destinationInput.val());
      databaseDocumentRef.set(
        {
            airline: airlineInput.val(),
            destination: destinationInput.val(),
        }
      ).then(additionSuccess()).catch(generalErrorHandler)
    }

submitNewButton.click(addToCollection);

function getBoardingPassCollection(doc){
  if (doc && doc.exists){
    var data = doc.data();
    console.log(data);
    boardingPassOutput.html(data.airline);
  }
}

function getLatestBoardingPass(){
  databaseDocumentRef.get().then(getBoardingPassCollection).catch(generalErrorHandler);
}

$("latest_boarding_pass").click(getLatestBoardingPass);
