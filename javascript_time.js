<div id="curr_time">     

<script>
         
         var div = document.getElementById('curr_time'); 
            function time() {
            div.innerHTML = "";
            var d = new Date();
            var t = d.toLocaleTimeString();
            div.innerHTML = t;
            }

        setInterval(time, 1000);

        </script>