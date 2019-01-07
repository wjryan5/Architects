
    function WebName()
    {
      if (typeof(Storage) !== "undefined") {
         if (localStorage.getItem("lastname")===null)
         {
            alert("Localstorage value not yet set");
            var name = prompt("Please enter your name");
            localStorage.setItem("lastname", name);
         }
         else
         {
            document.getElementById("result").innerHTML = localStorage.getItem("lastname")
         }
         document.getElementById("result").innerHTML = localStorage.getItem("lastname");
        
      }
      else
      {
         document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
      }
   }

