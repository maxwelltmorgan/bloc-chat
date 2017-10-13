(function() {
    function HomeCtrl(Room, $uibModal, $log, Message) {
      this.chatrooms = Room.all;
      this.items = ['item1', 'item2', 'item3'];



      this.currentRoom = function(room) {
          console.log(room.$value);
          console.log(room.$id);

          var currentRoom = room;
          this.currentRoomName = currentRoom.$value;
          this.messages = Message.getByRoomId(currentRoom.$id);

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
        .controller('HomeCtrl', ['Room', '$uibModal', '$log', 'Message', HomeCtrl]);
})();
