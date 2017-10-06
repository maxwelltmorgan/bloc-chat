(function() {
    function HomeCtrl(Room) {
      this.chatrooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
