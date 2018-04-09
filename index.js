//creamos la funcion que toma nombre y apellido del usuario
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

//creamos el usuario
var user = {
  firstName: 'John',
  lastName: 'Doe'
};

//el elemento a mostrar, es un mensaje usando la funcion
var element =
//<p>Hola, {formatName(user)}</p>
//<div tabIndex="0"/>
React.createElement(
  'div',
  null,
  React.createElement(
    'h2',
    null,
    'SubTitle'
  ),
  React.createElement(
    'h3',
    null,
    'Text'
  )
);

//Renderizamos
ReactDOM.render(React.createElement(
  'h1',
  null,
  'Sample Code'
), document.getElementById('root'));

ReactDOM.render(element, document.getElementById('newLine'));

//funcion y render
function customGreeting(user) {
  //Si hay un usuario,lo saludamos, sino no
  if (user) {
    return React.createElement(
      'h2',
      null,
      'Hello, ',
      formatName(user)
    );
  } else {
    return React.createElement(
      'h1',
      null,
      'Hello, Guest'
    );
  }
}

ReactDOM.render(customGreeting(user), document.getElementById('newLine2'));