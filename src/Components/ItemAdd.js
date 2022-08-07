import React, { Component } from 'react'
import $ from 'jquery'
import './addItem.css'

export class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            name: '',
            price: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggle = this.toggle.bind(this)
        this.toggle(this.props)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let id = this.state.id;
        if (this.props.list.length === 0) {
            id = 1;
        }
        else if (id === 0) {
            id = this.props.list.length + 1;
        }

        var data = {
            id: id,
            name: this.state.name,
            price: this.state.price,
        }

        this.props.handleUpdate(data)

        this.setState({
            id: 0,
            name: '',
            price: '',
        })

        // $.ajax({
        //     type: "POST",
        //     url: "https://ba8lbixyll.execute-api.us-east-1.amazonaws.com/prod",
        //     dataType: "json",
        //     crossDomain: "true",
        //     contentType: "application/json; charset=utf-8",
        //     data: JSON.stringify(data),

        //     success: function () {
        //         // clear form and show a success message
        //         alert('Thanks!');
        //     },
        //     error: function () {
        //         // show an error message
        //         alert('Something went wrong. Please try again.');
        //     }
        // });
    }
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            let data = this.props.list[parseInt(this.state.id) - 1]
            if (data !== undefined) {
                setTimeout(() => {
                    this.setState({
                        name: data.name,
                        price: data.price
                    })
                }, 500)

            }
        }
    }

    handleChange = (e) => {
        let newState = {}
        newState[e.target.name] = e.target.value
        this.setState(newState)
    }
    toggle(propsData) {
        if (propsData.id > 0) {
            let data = propsData.list[propsData.id - 1];
            setTimeout(() => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    price: data.price
                });
            }, 1000);
        }
    }

    render() {
        return (<div id="contact">
            <div className="d-flex flex-column bd-highlight mb-3 contact-bg">
                <div className="flex-fill">
                    <form className='react-form' method="post" onSubmit={(e) => this.handleSubmit(e)}>
                        <h1 id='formTitle'>Item Add / Update </h1>

                        <fieldset className='form-group'>
                            <label>ID:</label>
                            <input id='formID' className='form-input' name='id' type='number' required onChange={this.handleChange} value={this.state.id} onKeyDown={this.handleKeyDown} />
                        </fieldset>

                        <fieldset className='form-group'>
                            <label>Name:</label>
                            <input id='formName' className='form-input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
                        </fieldset>

                        <fieldset className='form-group'>
                            <label>Price $:</label>
                            <input id='formPrice' className='form-input' name='price' type='number' required onChange={this.handleChange} value={this.state.price} />
                        </fieldset>

                        <div className='form-group'>
                            <button id='formButton' className='form-btn' type='submit'>Send</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        )
    }
}