var el = document.getElementById('seconds'),
     total = el.innerHTML,
     timeinterval = setInterval(function () {
         total = --total;
         el.textContent = total;
         if (total <= 0) {
             clearInterval(timeinterval);
             // do redirect or something ~ window.location = '//google.de';
             window.location = 'https://jeffersonfed.xyz';
         }
     }, 1000);