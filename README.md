# Customer Registration

Developed in the **Front End** part with **HTML5, CSS3 and JavaScript**
In the part of Back-End still under ***construction will be developed in PHP 7.2 with database Mysql or Postgres***
Database with a customer table with the following attributes:

  
   |clientes ||
   |-----|----------|
   |nome|  varchar |
   |datanascimento| timestamp| 
   |cpf  |  int |
   |celular |int |
   |e-mail|varchar|
   |observacao| varchar|


## Getting Started
### Prerequisites

You'll need to have Node on your machine. We recommend to use **Node >= 6 and npm >= 3** for faster installation speed and better disk usage. (you can use yarn too).
It is necessary to have Node.js installed, because a ***Js lib is used to validate the CPF***

```node
npm install gerador-validador-cpf --save
```

> Include the file in the footer of your page, as in the example.

```html
<script src="node_modules/gerador-validador-cpf/dist/js/CPF.js"></script>
```

 #### Apache2 + PHP 7.2 or highe
 If I have Python installed on the machine, I suggest uploading a server to view in realtime
 the code.
 command to upload the server ```python -m SimpleHTTPServer 9001```

 To access the front-end part you need to go to the project folder, for example:
 http://localhost:9001/Front-End/




#### Contributing 
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

#### Versioning
 We use **Git** for versioning this repository.

## Author
[Thales Alonso](https://twitter.com/thalesalonsoo)

## License
[MIT](https://github.com/ThalesAlonso/Cadastro-Cliente/blob/master/LICENSE)
This project is licensed under the MIT License - see the LICENSE.md file for details

### Acknowledgments
