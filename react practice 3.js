class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    
    //Hay que hacer el bind para que 'this' funcione en los callbacks
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => ({
      // cuando cambiamos el estado, ponemos el opuesto de lo que estaba antes
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ACTIVADO' : 'DESACTIVADO'}
      </button>
    )
  };
}

ReactDOM.render(

  <Toggle />,
  document.getElementById('root')

);


/*
class LoggingButton extends React.Component {
  
  handleClick(){
    console.log('this is ', this);
  }
  
  render() {
    // 'this' is bound WITHIN handleclick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click Here
      </button>
    );
  }
  
}

ReactDOM.render(
  <LoggingButton />,
  document.getElementById('root2')
);
*/

///

//encapsular funciones A y B en funcion C, y AHI hacemos la validacion

function UserGreeting(props){
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props){
  return <h1>Please sign in</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn){
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function LoginButton(props){
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props){
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
/*
ReactDOM.render(
  <Greeting isLoggedIn={false}/>,
  document.getElementById('root2')
);
*/

//// usando lo anterior, se puede hacer una funcion mas completa

class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    //aca SI se puede hacer this.state = algo
    //porque estamos en el constructor
    this.state = {isLoggedIn: false};
  }
  
  handleLoginClick(){
    this.setState({isLoggedIn: true});
  }
  
  handleLogoutClick(){
    this.setState({isLoggedIn: false});
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    //si isLoggedIn es true, mostramos boton para DESloguear
    const button = isLoggedIn ? (
      <LogoutButton onClick={this.handleLogoutClick} />
    ) : (
      <LoginButton onClick={this.handleLoginClick} />
    );
    
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <p>The user is {isLoggedIn ? 'currently' : 'not'} logged in </p>
        {button}
      </div>
      
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root3')
);

function Mailbox(props){
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h2>Hello</h2>
      {unreadMessages.length > 0 &&
        <h3>
          You have {unreadMessages.length} unread messages.
        </h3>        
      }
    </div>
  );  
}

const messages = ['react', 'reactor', 'reactres']
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root4')
);

// tercer ejercicio

function WarningBanner(props){
  if(!props.warn){
    return null;
  }
  return (
    <div className="warning" >
      Warning!
    </div>
  );
}

class Page extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  
  handleToggleClick(){
    this.setState(prevState => ({showWarning: !prevState.showWarning}));
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'} label
        </button>
        <WarningBanner warn={this.state.showWarning} />
      </div>
    );
  }
}

ReactDOM.render(
  <Page/>,
  document.getElementById('root5')
);