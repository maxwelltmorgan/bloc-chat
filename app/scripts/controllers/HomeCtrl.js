(function() {
    function HomeCtrl(Room, $uibModal, $log, Message, $cookies) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      console.log(currentUser);
      this.chatrooms = Room.all;
      this.currentRoom = null;
      this.items = ['item1', 'item2', 'item3'];



      this.openRoom = function(room) {


          this.currentRoom = room;
          this.currentRoomName = room.$value;
          this.messages = Message.getByRoomId(room.$id);

      };

      this.sendMessage = function() {     // sets send method of sending messages to firebase
          //console.log(this);
          var date = new Date();

          Message.add({
            roomId: this.currentRoom.$id,
            username: currentUser,
            sentAt: firebase.database.ServerValue.TIMESTAMP,
            content: this.newMessage
          });

          this.newMessage = null;
      };

      this.animationsEnabled = true;


      this.open = function (size) {
          var modalInstance = $uibModal.open({
              animation: this.animationsEnabled,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: '/templates/modal.html',
              controller: 'ModalCtrl',
              controllerAs: 'modal',
              size: size,
              resolve: {
                  items: function () {
                      return this.items;
                  }
              }
          });

      modalInstance.result.then(function (selectedItem) {
        this.selected = seletedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

      this.toggleAnimation = function () {
        this.animationsEnabled = !this.animationsEnabled;
      };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$log', 'Message', '$cookies', HomeCtrl]);
})();
