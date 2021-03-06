import React, { Component } from 'react'
import TransactionsList from '../components/TransactionsList'
import Search from '../components/Search'
import TransactionsAdapter from '../adapters'

class AccountContainer extends Component {

  constructor() {
    super()

    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API

    this.state = {
      searchTerm: '',
      transactions: []
    }

    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    TransactionsAdapter.all()
      .then(data => this.setState({ transactions: data}) )
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
