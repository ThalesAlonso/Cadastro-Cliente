(function(win, doc){
    'use strict';

const $form = doc.querySelector('form-submit');
const $name = doc.querySelector('[data-js="nome"]');
const $born = doc.querySelector('[data-js="Nascimento"]');
const $cpf  = doc.querySelector('[data-js="CPF"]');
const $phone  = doc.querySelector('[data-js="Celular"]');
const $mail  = doc.querySelector('[data-js="mail"]');
const $area  = doc.querySelector('[data-js="txtArea"]');
const $button = doc.querySelector('[data-js=button]');


function validedName($name){
    var regex = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
     if($name.match(regex)) {
         return false;
     } else { return true; }
  }


  function checkMail(mail){
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    if(typeof(mail) == "string"){
      if(er.test(mail)){ return true; }
     }else if(typeof(mail) == "object"){		if(er.test(mail.value)){
       return true; 				}	}else{		return false;		}}

// função para validar CPF via NPM 
   CPF.validate();




})(window, document);
