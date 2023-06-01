import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  const {ticket, onClickingDelete, onClickingEdit} = props;
  return (
  <>
    <h1> Ticket Detail</h1>
    <h3>{ticket.location} - {ticket.names}</h3>
    <p><em>{ticket.issue}</em></p>
    <button onClick = {onClickingEdit}>UPDATE TICKET</button>
    <button onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
    <hr/>
  </>

  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func ,
  onClickingEdit: PropTypes.func

};

export default TicketDetail;