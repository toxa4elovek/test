//РЕГИСТРАЦИЯ

function validateEmail(email){
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(!pattern.test(email.value))
    {
		document.getElementById('error-email').innerHTML ="Электронный адрес не верный";
	    changeStatus(email, false);
    }else{
		document.getElementById('error-email').innerHTML ="";
		changeStatus(email, true);
	}
		
	}
	
	function validatePassword(password){
	var r=/[^A-Z-a-z-0-9]/g; 
	 if(r.test(password.value)){
	    document.getElementById('error-password').innerHTML = "Введены недопустимые символы. Разрешены латинские буквы и цифры";
		changeStatus(password, false);
	  } else if(password.value.length<6){
		document.getElementById('error-password').innerHTML = "Слишком короткий пароль";
		changeStatus(password, false);
	  } else if (password.value.length>20){ 
	    document.getElementById('error-password').innerHTML = "Слишком длинный пароль";
		changeStatus(password, false);
	  } else{
	  document.getElementById('error-password').innerHTML = "";
	  changeStatus(password, true);
	  }
		
	}
	
	function validatePasswordRepeate(password){
	if((password.value == "") || (password.value != document.getElementById('password').value)){ 
	  document.getElementById('error-password-repeate').innerHTML = "Пароли не совпадают";
	  changeStatus(password, false);
	  } else{
	  document.getElementById('error-password-repeate').innerHTML = "";
	  changeStatus(password, true);
	  }
		
	}
	
	function validateName(name){
	var pattern = new RegExp(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/);
    if(!pattern.test(name.value))
    {
		document.getElementById('error-name').innerHTML = "Имя может состоять только из букв";
	    changeStatus(name, false);
    }else{
		document.getElementById('error-name').innerHTML = "";
		changeStatus(name, true);
	}
		
	}
	
	function changeStatus(tobj, check){
		if(check){
			tobj.style.border = "1px solid green";
		}
		else{
			tobj.style.border = "1px solid red";
		}
		}
		
		function checkform(){
		//тип пользователя
		var status = document.getElementsByName('status');
		var checkedStatus = false;
		for (var i = 0; i < status.length; i++) {
			if (status[i].type == "radio" && status[i].checked) {
				checkedStatus = true;
			}
		}
		if(checkedStatus==false){document.getElementById('error-status').innerHTML = "Не выбран тип пользователя";}
		else{document.getElementById('error-status').innerHTML = "";}
			
		//проверка на азполнением имени
		validateName(document.getElementById('name'));
		if(document.getElementById('name').value == ''){document.getElementById('error-name').innerHTML = "Имя не указано";}
		
		//проверка введения электронного адреса
		validateEmail(document.getElementById('email'));
		if(document.getElementById('email').value == ''){document.getElementById('error-email').innerHTML = "Не введен электронный адрес";}
		
		//проверка введения пароля
		validatePassword(document.getElementById('password'));
		if(document.getElementById('password').value == ''){document.getElementById('error-password').innerHTML = "Пароль не введен";}
		validatePasswordRepeate(document.getElementById('password-repeate'));
		if(document.getElementById('password-repeate').value == ''){document.getElementById('error-password-repeate').innerHTML = "Повторите ввод пароля";}
		
		if(document.getElementById('captcha').value == ''){document.getElementById('error-captcha').innerHTML = "Введите текст с картинки";}
		if (!document.getElementById('agreement').checked) {document.getElementById('error-agrement').innerHTML = "Вы не подтвердили согласие в правилами!";}
		else{document.getElementById('error-agrement').innerHTML = "";}
			
			
		}
	
//ДОБАВЛЕНИЕ ОБЪЯВЛЕНИЯ

function validatePhone(phone){

var pattern = new RegExp(/^\d[\d\(\)\ -]{4,14}\d$/);
// /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/    8 (999) 123-45-64
    if(!pattern.test(phone.value))
    {
		document.getElementById('error-phone').innerHTML = "Не корректный номер телефона";
	    changeStatus(phone, false);
    }else{
		document.getElementById('error-phone').innerHTML = "";
		changeStatus(phone, true);
	}

}

function validateCaption(caption){
	if(caption.value.length<5)
    {
		document.getElementById('error-caption').innerHTML = "Слишком короткий заголовок";
	    changeStatus(caption, false);
    }else{
		document.getElementById('error-caption').innerHTML = "";
		changeStatus(caption, true);
	}
	
} 
function checkFormPost(){
	//проверка введения электронного адреса
		validateEmail(document.getElementById('email'));
		if(document.getElementById('email').value == ''){document.getElementById('error-email').innerHTML = "Не введен электронный адрес";}
	//проверка на азполнением имени
		validateName(document.getElementById('name'));
		if(document.getElementById('name').value == ''){document.getElementById('error-name').innerHTML = "Имя не указано";}
			
	//проверка на азполнением телефона
		validateName(document.getElementById('phone'));
		if(document.getElementById('phone').value == ''){document.getElementById('error-phone').innerHTML = "Телефон не указан";}
		
	//проверка на заполннение заголовка объявления
		validateCaption(document.getElementById('caption'));
		if(document.getElementById('caption').value == ''){document.getElementById('error-caption').innerHTML = "Укажите заголовок объявления";}
		
		//проверка на заполннение заголовка объявления
		if(document.getElementById('description').value.lenght<15){document.getElementById('error-descr').innerHTML = "Слишком короткий текст объявления";}
		if(document.getElementById('description').value == ''){document.getElementById('error-descr').innerHTML = "Не указан текст объявления";}
		
		if(document.getElementById('category').value == '') {document.getElementById('category-error').innerHTML = "Не выбрана категория!";}
		
		
		
		
		
		
		
		
		
	//боковая кнопка
	
	
	(function(){
		var a = document.querySelector('#fixed'), b = null, P = 0;
		window.addEventListener('scroll', Ascroll, false);
		document.body.addEventListener('scroll', Ascroll, false);
		function Ascroll() {
		  if (b == null) {
			var Sa = getComputedStyle(a, ''), s = '';
			for (var i = 0; i < Sa.length; i++) {
			  if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
				s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
			  }
			}
			b = document.createElement('div');
			b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
			a.insertBefore(b, a.firstChild);
			var l = a.childNodes.length;
			for (var i = 1; i < l; i++) {
			  b.appendChild(a.childNodes[1]);
			}
			a.style.height = b.getBoundingClientRect().height + 'px';
			a.style.padding = '0';
			a.style.border = '0';
		  }
		  var Ra = a.getBoundingClientRect(),
			  R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#centerbl').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
		  if ((Ra.top - P) <= 0) {
			if ((Ra.top - P) <= R) {
			  b.className = 'stop';
			  b.style.top = - R +'px';
			} else {
			  b.className = 'sticky';
			  b.style.top = P + 'px';
			}
		  } else {
			b.className = '';
			b.style.top = '';
		  }
		  window.addEventListener('resize', function() {
			a.children[0].style.width = getComputedStyle(a, '').width
		  }, false);
		}
		})()
		
		
		
		// выпадающее меню

		$(".checkbox-dropdown").click(function () {
			$(this).toggleClass("is-active");
			
		});

		$(".checkbox-dropdown ul").click(function(e) {
			e.stopPropagation();
		});
		
	
	

	// кнопка которая прячет расширенное меню
	function hide()
	{
		src = document.getElementById('btnhide').src;
		
		if((src.slice(-8))=="left.png"){
			document.getElementById('adv-settings').style.display="none";
			document.getElementById('btnhide').src = "images/show.png";
			document.getElementById("items").classList.remove("col-md-9");
			document.getElementById("items").className += " col-md-12";
		}
		else
		{
			document.getElementById('adv-settings').style.display="block";
			
			document.getElementById("items").classList.remove("col-md-12");
			document.getElementById("items").className += " col-md-9";
			document.getElementById('btnhide').src = "images/left.png";
		}

	}
	
	


	
	
	
	

}