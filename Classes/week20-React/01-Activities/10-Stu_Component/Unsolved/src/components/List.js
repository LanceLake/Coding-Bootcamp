import React from 'react';

function List(props) {
  return (
    <ul className="list-group">
      {props.groceries.map((item) => {
        return (
			<li className="list-group-item" key={item.id} >
            	{item.name} {item.purchased}
			</li>
  		);
		})}
	</ul>
  );
}

export default List;
