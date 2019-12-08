import React from 'react';
import blockTypes from 'constants/blockTypes';
import PropTypes from 'prop-types';
import * as Styled from './BlockSelection.styled';


export default function BlockSelection(props) {
  const { onSelectBlock } = props;
  const [activeBlock, setActiveBlock] = React.useState(null);
  const blocks = Object.keys(blockTypes);

  const handleBlockClicked = (blockValue) => {
    setActiveBlock(blockValue);
  };

  const handleConfirm = () => {
    if (activeBlock) {
      onSelectBlock(activeBlock);
    }
  }

  return (
    <Styled.BlockSelection>
      You are the master builder. Select a block:
      {blocks.map((blockKey) => {
        const block = blockTypes[blockKey];
        return (
          <Styled.Block
            key={blockKey}
            onClick={() => handleBlockClicked(blockKey)}
            color={block.color}
          >
            {block.displayName}
          </Styled.Block>
        );
      })}
      <button onClick={handleConfirm}>Confirm</button>
    </Styled.BlockSelection>
  )
}

BlockSelection.propTypes = {
  onSelectBlock: PropTypes.func.isRequired,
};