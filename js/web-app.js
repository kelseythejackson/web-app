var webApp = (function () {
  var userInput = document.querySelector('.user-input'),
  userMessage = document.querySelector('.user-message'),
  sendMessage = document.getElementById('send-message'),
  alerts = document.querySelector('.alerts'),
  alertBox = document.querySelector('.alert-box'),
  alertClose = document.querySelector('.alert-box-close'),
  alertText = document.querySelector('.alert-box-text'),
  alertsList = document.querySelector('.alerts-list'),
  newAlerts = document.querySelector('.new-alerts'),
  header = document.getElementsByTagName('header')[0],
  userList = document.querySelector('.user-list'),
  saveBtn = document.querySelector('.save'),
  sendEmail = document.getElementById('switch-input-1'),
  setProfile = document.getElementById('switch-input-2'),
  timezone = document.querySelector('.select-timezone'),
  userListItems = userList.children;


  function validate () {
    sendMessage.addEventListener('click', function () {
      if (userInput.value === ''  || userMessage.value === '') {
        if (userInput.value === '') {
          userInput.classList.add('highlight');
        } else if (userMessage.value === '') {
          userMessage.classList.add('highlight');
        }
        alertBox.classList.remove('success');
        alertBox.classList.add('error');
        alertBox.classList.add('expand');
        alertText.innerText = 'Not valid';
        setTimeout(function () {
          alertBox.classList.remove('success');
        }, 4500);
      } else if (userInput.value !== '' && userMessage.value !== '') {
        userInput.classList.remove('highlight');
        userMessage.classList.remove('highlight');
        alertBox.classList.remove('error');
        alertBox.classList.add('success');
        alertBox.classList.add('expand');
        alertText.innerText = 'Message sent!';
        userMessage.value = '';
        setTimeout(function () {
          alertBox.classList.remove('expand');
        }, 4000);
        setTimeout(function () {
          alertBox.classList.remove('success');
        }, 4500);
      }



    });
  }

  function clearInputClasses () {
    userInput.addEventListener('focus', function () {
      this.classList.remove('highlight');
    });
    userMessage.addEventListener('focus', function () {
      this.classList.remove('highlight');
    });
  }

  function closeAlert () {
    alertClose.addEventListener('click', function () {
      this.parentNode.classList.remove('expand');
      alertBox.classList.remove('success');
    });
  }

  function showNotification () {
    alertText.innerText = 'You have new alerts.';
    alertBox.classList.add('default');
    setTimeout(function () {
      alertBox.classList.add('expand');
    }, 600);
  }

  function showAlerts () {
    alerts.addEventListener('click', function () {
      alertsList.classList.toggle('reveal');
      newAlerts.classList.add('fade-out');
      header.classList.toggle('up-front');
    }, false);
  }

  function users() {
    userInput.value = this.innerText;
    userList.classList.add('hidden');
  }



  function filterUsers () {
    userInput.addEventListener('focus', function () {
      userList.classList.remove('hidden');
      // cycleThrough();
    }, false);
    // userInput.addEventListener('blur', function () {
    //   if (userInput.value === '') {
    //     userList.classList.add('hidden');
    //   }
    // }, false);
    userInput.addEventListener('keyup', function () {
      var filter = this.value.toUpperCase(),
      list = userListItems;
      for (var i = 0; i < list.length; i++) {
        var name = list[i].innerText;
        if (name.toUpperCase().indexOf(filter) !== 0) {
          list[i].classList.add('collapse');
        } else {
          list[i].classList.remove('collapse');
        }
      }

    }, false);
  }



  function updateValue () {
    for (var i = 0; i < userListItems.length; i++) {
      userListItems[i].addEventListener('click', users, false);
    }
  }
  //
  // function cycleThrough () {
  //   var count = -1;
  //   window.addEventListener('keydown', function (e) {
  //     if (e.which === 40) {
  //       count++;
  //       for (var j = 0; j < userListItems.length; j++) {
  //
  //         if (count === j && count !== userListItems.length) {
  //           if (userListItems[j].previousElementSibling) {
  //             userListItems[j].previousElementSibling.classList.remove('active');
  //           }
  //           userListItems[j].classList.add('active');
  //           userInput.value = userListItems[j].innerText;
  //         }
  //
  //       }
  //     }
  //     // else if (e.which === 38) {
  //     //   count--;
  //     //   for (var q = 0; q < userListItems.length; q++) {
  //     //     if (count === q) {
  //     //       userListItems[q].classList.remove('active');
  //     //     }
  //     //
  //     //   }
  //     // }
  //   });
  // }
  function savePreferences () {
    function supportsLocalStorage () {
      try {
        return 'localStorage' in window && window.localStorage !== null;
      } catch(e) {
        return false;
      }
    }

    if (supportsLocalStorage()) {
      sendEmail.addEventListener('change', function () {
        if (sendEmail.checked) {
          localStorage.sendItem = 'Don\'t send the notification';
        } else if (!sendEmail.checked) {
          localStorage.sendItem = 'Send the notification';
        }
      });

      setProfile.addEventListener('change', function () {
        if (setProfile.checked) {
          localStorage.setProfile = 'Don\'t set profile';
        } else if (!setProfile.checked) {
          localStorage.setProfile = 'Set profile';
        }
      });


      timezone.addEventListener('change', function () {
        localStorage.setItem('select', timezone.value);
      });

      if (localStorage.sendItem === 'Don\'t send the notification' ) {
        sendEmail.checked = true;
      } else if (localStorage.sendItem === 'Send the notification') {
        sendEmail.checked = false;
      }

      if (localStorage.setProfile === 'Don\'t set profile' ) {
        setProfile.checked = true;
      } else if (localStorage.setProfile === 'Set profile') {
        setProfile.checked = false;
      }
      timezone.value = localStorage.select;


    }
  }
  return {
    validate: validate,
    closeAlert: closeAlert,
    showNotification: showNotification,
    clearInputClasses: clearInputClasses,
    showAlerts: showAlerts,
    updateValue: updateValue,
    filterUsers: filterUsers,
    savePreferences: savePreferences
  };
})();


webApp.validate();
webApp.closeAlert();
webApp.showNotification();
webApp.clearInputClasses();
webApp.showAlerts();
webApp.updateValue();
webApp.filterUsers();
webApp.savePreferences();
