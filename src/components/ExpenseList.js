import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItems from './ExpenseListItems';
import selectedList from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        <ExpenseListItems expenses={props.expenses} />
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses : selectedList(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);
