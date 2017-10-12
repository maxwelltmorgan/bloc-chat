(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    console.log(messages);

    Message.getByRoomId = function(roomId) {
      console.log(roomId);
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
