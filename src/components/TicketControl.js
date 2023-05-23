import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TroubleShoot from './TroubleShoot';

class TicketControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listVisibleOnPage:true,
      formVisibleOnPage:false,
      troubleshootMessageVisibleOnPage: false
    };
  }
  // handleClick = () => {
  //   this.setState({formVisibleOnPage: true});
    
    
  // }
  handleClick = () => {
    this.setState(prevState => ({
      listVisibleOnPage: prevState.formVisibleOnPage,
      formVisibleOnPage: prevState.troubleshootMessageVisibleOnPage,
      troubleshootMessageVisibleOnPage: prevState.listVisibleOnPage
    }));
  }
  

  render (){
    let currentlyVisibleState = null;
    let buttonText = null;
    let addTicketButton = null; //thhanks camaron
    if(this.state.troubleshootMessageVisibleOnPage){
        
        currentlyVisibleState = <TroubleShoot />
        buttonText = "YES DUH";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Troubleshoot";
      // addTicketButton = <button onClick={this.handleClick}>Add Ticket</button>
    }

    // switch(this.state) {
    //   case "list":
    //     currentlyVisibleState = <TicketList />
    //     buttonText = "Troubleshoot";
    //     break;
    //   case "troubleshoot"
    // }
    
 
    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }

}
export default TicketControl;