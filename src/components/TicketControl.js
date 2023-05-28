import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TroubleShoot from './TroubleShoot';
import { v4 } from 'uuid'
class TicketControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      stateName: 'list',
      mainTicketList: [],
      selectedTicket: null,
    };
  }
 
  handleClick = () => {
    let nextState = null;
    
    switch(this.state.stateName){
      case 'troubleshoot':
        nextState = 'form';
        break;
      case 'form':
        nextState = 'list';
        break;
      case 'list':
        nextState = 'troubleshoot';
        break;
      default:
        nextState = 'list';
        break;
    }
    this.setState(prevState => ({
      stateName: nextState
    }))
  };

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState(prevState => ({
      mainTicketList: newMainTicketList
    }));
    this.handleClick()
    };
  
  

  render (){
    let currentlyVisibleState = null;
    let buttonText = null;
    let addTicketButton = null; //thhanks camaron

    switch(this.state.stateName){
      case 'troubleshoot':
        currentlyVisibleState = <TroubleShoot />;
        buttonText = "YES DUH";
        break;
      case 'form':
        currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>;
        buttonText = "Return to Ticket List";
        break;
      case 'ticketList':
        currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} />
        buttonText ="Troubleshoot";
        break;
      default: 
        currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} />
        buttonText ="Troubleshoot";
        break;
    }
 
    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}
export default TicketControl;