//creamos la funcion que toma nombre y apellido del usuario
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

//validamos si hay usuario y lo saludamos
function customGreeting(user) {
  //Si hay un usuario,lo saludamos, sino no
  if (user) {
    return <p>Hello, {formatName(user)}!</p>;
  } else {
    return <p>Hello, guest!</p>
  }
}

//creamos el usuario
var user = {
  firstName: 'John',
  lastName: 'Doe'
};

//el elemento a mostrar, es un mensaje usando la funcion
var element = (
//<p>Hola, {formatName(user)}</p>
//<div tabIndex="0"/>
  <div>
    <h2>Subtitulo</h2>
    <h3>Texto</h3>
  </div>
);

//Titulo
ReactDOM.render(<h1>A Sample Code</h1>, document.getElementById('root'));
//Subtitulo y texto
ReactDOM.render(element, document.getElementById('newLine'));
//Saludo personalizado
ReactDOM.render(customGreeting(user), document.getElementById('newLine2'));

////

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
    () => this.tick(), 1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  
  tick() {
    this.setState({date: new Date()});
  }
  
  render() {
    return (
      <p>It is {this.state.date.toLocaleTimeString()}.</p>
    );
  }
}

ReactDOM.render(
  <Clock />, 
  document.getElementById('newLine3')
);

////

this.setState({comment: 'hello'});

class Objeto extends React.Component {
  
  constructor(props) {
    super(props);
    //correct
    this.setState((prevState, props) => ({
    
      counter: prevState.counter + props.increment
      
    }) );
    this.state = {
      posts: [],
      comments: []
    };
  }
  
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
  
  
}
/*
  //also correct
  this.setState(function (prevState, props) {
    return {
      counter: prevState.counter + props.increment
    };
  });
*/


