(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      console.log(Message);



    Message.getByRoomId = function(roomId) {
      console.log(roomId);
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      console.log($firebaseArray);

    };

    Message.add = function(newMessage) {
        messages.$add(newMessage);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
