(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log(currentUser);
    if (!currentUser || currentUser === '') {     // if there is no current user value or current user is empty value
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
