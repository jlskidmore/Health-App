
  //functions for save/retrieve HR localstorage
    function getHR(){
      document.getElementById('heart').value = window.localStorage['heart'];
      }

    function saveHR(){
      window.localStorage['heart'] = document.getElementById('heart').value;
      window.localStorage.setItem('heart', document.getElementById('heart').value);
      }

    //functions for save/retrieve BP localstorage
      function getBP(){
        document.getElementById('sys').value = window.localStorage['sys'];
        document.getElementById('dia').value = window.localStorage['dia'];
        }
  
      function saveBP(){
        window.localStorage['sys'] = document.getElementById('sys').value;
        window.localStorage.setItem('sys', document.getElementById('sys').value);

        window.localStorage['dia'] = document.getElementById('dia').value;
        window.localStorage.setItem('dia', document.getElementById('dia').value);
        }

    //functions for save/retrieve profile localstorage
      function getPRO(){
        if(localStorage.getItem('name') === null){
          $("#myModal").modal({backdrop: true});
        }

        else {
        document.getElementById('name').value = window.localStorage['name'];
        document.getElementById('age').value = window.localStorage['age'];
        document.getElementById('height').value = window.localStorage['height'];
        document.getElementById('weight').value = window.localStorage['weight'];

        document.getElementById('name').innerHTML = window.localStorage['name'];
        document.getElementById('age').innerHTML = window.localStorage['age'];
        document.getElementById('height').innerHTML = window.localStorage['height'];
        document.getElementById('weight').innerHTML = window.localStorage['weight'];
      }
        }

      function savePRO(){
        if(localStorage.getItem('name') === null){
        window.localStorage['name'] = document.getElementById('name1').value;
        window.localStorage.setItem('name', document.getElementById('name1').value);

        window.localStorage['age'] = document.getElementById('age1').value;
        window.localStorage.setItem('age', document.getElementById('age1').value);

        window.localStorage['height'] = document.getElementById('height1').value;
        window.localStorage.setItem('height', document.getElementById('height1').value);

        window.localStorage['weight'] = document.getElementById('weight1').value;
        window.localStorage.setItem('weight', document.getElementById('weight1').value);

        window.location.replace("profile.html");

        }

        else {
        window.localStorage['name'] = document.getElementById('name').value;
        window.localStorage.setItem('name', document.getElementById('name').value);

        window.localStorage['age'] = document.getElementById('age').value;
        window.localStorage.setItem('age', document.getElementById('age').value);

        window.localStorage['height'] = document.getElementById('height').value;
        window.localStorage.setItem('height', document.getElementById('height').value);

        window.localStorage['weight'] = document.getElementById('weight').value;
        window.localStorage.setItem('weight', document.getElementById('weight').value);
      }
        }

    //functions for save/retrieve HR localstorage
      function saveEx(){
        var elements = document.getElementsByTagName("select");
        for (var i = 0; i < elements.length; i++) {
          console.log(elements[i].value);
          }
        }

    //creating new entry in profile tables
      function compEx(){
        var text = document.getElementById("completed");
        for (var i = 0; i < localStorage.length; i++){
        text.insertAdjacentHTML('beforeend', '<li class="list-group-item">This is a test ' + localStorage.getItem(localStorage.key(i)) + '</li>');
        }
      }

    //adding exercises to page
    var count = 1;

    function addExercise(){
      var text = document.getElementById("drop");
      count++
      console.log(count);

      text.insertAdjacentHTML('beforeend',
            '<div class="mt-3">' + 
            '<select id="'+ count +'" class="custom-select" onblur="saveEx()">' +
              '<option selected="">Select your exercise:</option>' +
              '<option value="Running">Running</option>' +
              '<option value="Push-Ups">Push-Ups</option>' +
              '<option value="Sit-Ups">Sit-Ups</option>' +
              '<option value="Biking">Biking</option>' +
            '</select>' +
            //'<span class="badge badge-pill badge-danger">Delete</span>' +
            '</div>'
      );
      
      return count
    }

    //removing exercises
    function delExercise(){
      var list = document.getElementById(count);
      list.remove();
      count--
      console.log(count);
    return count

      /*
      for (var k = list.length - 1; k >= 0; k--) {
        var item = list[k];
        item.parentNode.removeChild(item);
      }  */  
    }

  

      
