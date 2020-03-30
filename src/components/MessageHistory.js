import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message.js';
import Response from './Response.js';
import Typing from './Typing.js';


export default function MessageHistory(props) {
  const { list } = props;

  if (!list.length) {
    return null;
  }

  return (
    <ul>
      {list.map((itemMsg) => (<li key={itemMsg.id}>
        <Response from={itemMsg.from.name} message={itemMsg} />
        <Message from={itemMsg.from.name} message={itemMsg} />
        <Typing from={itemMsg.from.name} message={itemMsg} />
        </li>))}
    </ul>
  );
}

MessageHistory.defaultProps = {
  list: [],
};

MessageHistory.propTypes = {
  list: PropTypes.array,
};
