(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log(currentUser);
    if (!currentUser || currentUser === '') {
      this.userModalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/userModal.html',
                controller: 'UserModalCtrl',
                controllerAs: 'userModal',
                size: 'sm',
                backdrop: 'static',
                keyboard: false
      })

    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
