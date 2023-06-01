import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes  from "react";

function EditTicketForm (props) {
  const {ticket} = props;
  function handleEditFormSubmission(e){
    e.preventDefault();
    props.onClickingEdit({names: e.target.names.value, location: e.target.location.value, issue: e.target.issue.value, id: ticket.id})
  }
  return ( 
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}
EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default EditTicketForm;