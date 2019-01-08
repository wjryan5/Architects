/* Local Storage */
    function WebName()
    {
      if (typeof(Storage) !== "undefined") {
         if (localStorage.getItem("lastname")===null)
         {
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

   /* This jQuery is for the modal boxes */
   $(document).ready(function () 
   {
      console.log("ready!");
  
      $(".myBtnED").click(function () 
      {
          $(".overlayED").show();
          setTimeout(function () { $(".overlayED").hide(); }, 15000);
      });
  
      $(".close").click(function () 
      {
          $(".overlayED").hide();
      });
  
  });
  $(document).ready(function () 
  {
   console.log("ready!");

   $(".myBtnAL").click(function () 
   {
       $(".overlayAL").show();
       setTimeout(function () { $(".overlayAL").hide(); }, 15000);
   });

   $(".close").click(function () 
   {
       $(".overlayAL").hide();
   });

});
$(document).ready(function () 
{
   console.log("ready!");

   $(".myBtnAW").click(function () 
   {
       $(".overlayAW").show();
       setTimeout(function () { $(".overlayAW").hide(); }, 15000);
   });

   $(".close").click(function () 
   {
       $(".overlayAW").hide();
   });

});
$(document).ready(function () 
{
   console.log("ready!");

   $(".myBtnTS").click(function () 
   {
       $(".overlayTS").show();
       setTimeout(function () { $(".overlayTS").hide(); }, 15000);
   });

   $(".close").click(function () 
   {
       $(".overlayTS").hide();
   });

});
