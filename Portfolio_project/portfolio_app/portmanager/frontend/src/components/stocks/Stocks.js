import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getStocks, deleteStocks } from '../../actions/stocks'

export class Stocks extends Component {
    static propTypes = {
        stocks: PropTypes.array.isRequired,
        getStocks: PropTypes.func.isRequired,
        deleteStocks: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getStocks();
    }

    render() {
        return (
            <Fragment>
                <h2>Stocks</h2>
                <table className="">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ticker</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Buy Price</th>
                            <th>Sell Price</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.stocks.map(stock => (
                            <tr key={stock.id}>
                                <td>{stock.ticker}</td>
                                <td>{stock.stock_name}</td>
                                <td>{stock.quantity}</td>
                                <td>{stock.buy_price}</td>
                                <td>{stock.sell_price}</td>
                                <td><button onClick={this.props.deleteStocks.bind(this, stock.id)} className="">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>({
    stocks: state.stocks.stocks
})

export default connect(mapStateToProps, { getStocks, deleteStocks })(Stocks)
