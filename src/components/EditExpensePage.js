import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startEditExpenses, startRemoveExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense)=>{
                    props.dispatch(startEditExpenses(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={(e)=> {
                props.dispatch(startRemoveExpense(props.expense));
                props.history.push('/');                
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense : state.expenses.find((expense)=>{
            return expense.id === props.match.params.id;
        }),
    }
};

export default connect(mapStateToProps)(EditExpensePage);
