import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addStocks } from '../../actions/stocks'

export class Form extends Component {
    state ={
        ticker: '',
        stock_name: '',
        quantity: '',
        buy_price: '',
        sell_price: ''
    }

    static propTypes = {
        addStock: PropTypes.func.isRequired
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const { ticker, stock_name, quantity, buy_price, sell_price } = this.state;
        const stock = { ticker, stock_name, quantity, buy_price, sell_price };
        this.props.addStocks(stock);
    }

    render() {
        const { ticker, stock_name, quantity, buy_price, sell_price } = this.state;
        return (
            <div className="">
                <h2>Add Stock</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="">
                        <label>Ticker</label>
                        <input className="" type="text" name="ticker" onChange={this.onChange} value={ticker} />
                    </div>
                    <div className="">
                        <label>Stock Name</label>
                        <input className="" type="text" name="stock_name" onChange={this.onChange} value={stock_name} />
                    </div>
                    <div className="">
                        <label>Quantity</label>
                        <input className="" type="text" name="quantity" onChange={this.onChange} value={quantity} />
                    </div>
                    <div className="">
                        <label>Buy Price</label>
                        <input className="" type="text" name="buy_price" onChange={this.onChange} value={buy_price} />
                    </div>
                    <div className="">
                        <label>Sell Price</label>
                        <input className="" type="text" name="sell_price" onChange={this.onChange} value={sell_price} />
                    </div>
                    <div className="">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addStocks })(Form)
