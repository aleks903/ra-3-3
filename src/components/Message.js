import React from 'react';
import PropTypes from 'prop-types';

export default function Message(props) {
  const { from, message } = props;

  if (message.type !== 'message') {
    return null;
  }

  return (
    <>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{from}</span>
  <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">
        {message.text}
      </div>
    </>
  );
}

Message.propTypes = {
  from: PropTypes.string,
  message: PropTypes.object,
};
