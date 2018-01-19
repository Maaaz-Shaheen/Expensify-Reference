import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';


const ExpenseListItems = (props) => (
    <div>
        {props.expenses.map((expense, i) => {
            return (
                <div key={i}>
                    <Link to={`/edit/${expense.id}`}>
                        <h3>{expense.description}</h3>
                    </Link>
                    <p>\
                        {expense.amount}
                         - 
                        {/* {moment(expense.createdAt).format('MMMM Do, YYYY')} */}
                        {expense.createdAt}
                    </p>
                </div>
            )
        })}
    </div>
);


export default ExpenseListItems;