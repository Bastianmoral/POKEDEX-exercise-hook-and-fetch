import React from 'react'


const Pagination = (props) => {
  const {onLeftClick, onRightClick, page, totalPages} = props;
  console.log(onLeftClick, onRightClick)

  return (
    <div className="pagination">
      <button onClick={onLeftClick}>
        <div>Back</div>
      </button>
      <div>{page} de {totalPages}</div>
      <button onClick={onRightClick}>
        <div>Forward</div>
      </button>
    </div>
  );
};

export default Pagination;