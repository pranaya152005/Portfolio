// Terminal-style typing animation for the hero section
(function(){
  var cmdEl = document.getElementById('typed-cmd');
  var nameEl = document.getElementById('typed-name');
  var roleEl = document.getElementById('typed-role');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var cmdText = "whoami --verbose";
  var nameText = "Pranaya Rakshe";
  var roleText = "Cybersecurity Fresher — Ethical Hacking · VAPT · Network Security";

  // If the user prefers reduced motion, just show the final text immediately
  if(reduce){
    cmdEl.textContent = cmdText;
    nameEl.textContent = nameText;
    roleEl.innerHTML = roleText + '<span class="cursor"></span>';
    return;
  }

  function typeInto(el, text, speed, done){
    var i = 0;
    (function step(){
      if(i <= text.length){
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(step, speed);
      } else if(done){ done(); }
    })();
  }

  // Chain: type the command -> type the name -> type the role -> blinking cursor
  typeInto(cmdEl, cmdText, 42, function(){
    setTimeout(function(){
      typeInto(nameEl, nameText, 55, function(){
        setTimeout(function(){
          typeInto(roleEl, roleText, 18, function(){
            roleEl.innerHTML = roleEl.textContent + '<span class="cursor"></span>';
          });
        }, 200);
      });
    }, 250);
  });
})();
