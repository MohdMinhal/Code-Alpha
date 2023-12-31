let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
function onSubmit(token) {
  document.getElementsByClassName("primary__button").submit();
}
function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('6Ld3Y3gnAAAAAIcua65E5-q2p3MQIGddDphEbqDL', {action: 'submit'}).then(function(token) {
    });
  });
}