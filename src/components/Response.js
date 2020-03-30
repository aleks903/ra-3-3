import React from 'react';
import PropTypes from 'prop-types';

export default function Response(props) {
  const { from, message } = props;

  if (message.type !== 'response') {
    return null;
  }

  return (
    // <li key={message.id} className="clearfix">
    <>
      <div className="message-data align-right">
        <span className="message-data-name">{from}</span>
        <span className="message-data-time">{message.time}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {message.text}
      </div>
    </>
  );
}

Response.propTypes = {
  from: PropTypes.string,
  message: PropTypes.object,
};
