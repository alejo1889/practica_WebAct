(function () {
        
    var dial = document.querySelector("#dial");
    if (dial) { 
        dial.onclick = function () {
            var call = new MozActivity({
                name: "dial",
                data: {
                    number: "+34"
                }
            });
        }
    }

var addContact = document.querySelector("#add-contact");
    if (addContact) { 
        addContact.onclick = function () {
            var newContact = new MozActivity({
                name: "new", 
                data: {
                    type: "webcontacts/contact"             
                }
            });
        }
    }
    var sendSMS = document.querySelector("#send-sms");
    if (sendSMS) { 
        sendSMS.onclick = function () {
            var sms = new MozActivity({
                name: "new", 
                data: {
                    type: "websms/sms"
                    
                }
            });
        }
    }

     var composeEmail = document.querySelector("#compose-email");
    if (composeEmail) { 
        composeEmail.onclick = function () {
            var createEmail = new MozActivity({
                name: "new", 
                data: {
                    url: "mailto:ejemplo@email.com"
                }
            });
        }
    }

    var pickImage = document.querySelector("#take-picture");
    if (pickImage) {
        pickImage.onclick = function () {
            var pick = new MozActivity({
                name: "pick",
                data: {
                    type: ["image/png", "image/jpg", "image/jpeg"]
              }
            });
              }
    }

  var share = document.querySelector("#browse-picture");
    if (share) { 
        share.onclick = function () {
            var sharing = new MozActivity({
                name: "browse",
                data: {
                     type: "photos"
                   
                }
            });
        }
    }

    var share = document.querySelector("#share");
    if (share) { 
        share.onclick = function () {
            var sharing = new MozActivity({
                name: "share",
                data: {
                     number: 1
                   
                }
            });
        }
    }

     
   
})(); 