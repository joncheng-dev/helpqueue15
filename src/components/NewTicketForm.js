import React from "react";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function NewTicketForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();

    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <h2>New Ticket Form</h2>
      <hr />
      <ReusableForm onFormSubmission={handleNewTicketFormSubmission} buttonText="Add New Ticket" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
};

export default NewTicketForm;
