import React from 'react';
import PropTypes from 'prop-types';

export default function Typing(props) {
  const { from, message } = props;

  if (message.type !== 'typing') {
    return null;
  }

  return (
    // <li key={message.id} className="clearfix">
    <>
    <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{from}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div>
        {'...'}
      </div>
    </>
  );
}

Typing.propTypes = {
  from: PropTypes.string,
  message: PropTypes.object,
};
