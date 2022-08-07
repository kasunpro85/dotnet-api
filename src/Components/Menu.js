import React, { Component } from 'react'
import './menu.css'
import { Table } from 'reactstrap';

var menuDescription = 'Our exciting menu of delecious desserts'

export class Menu extends Component {
  constructor(props) {
    super()
   
   
  }

  render() {    
    const { list } = this.props;
    return (
      <div className="container" id="menu">

        <h3 className="col text-center">Menu</h3>
        <p className="col text-center lead">{menuDescription}</p>
        <div className="row menuContainer" >

          <Table hover bordered striped responsive size="sm">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>ID</th>
                <th style={{ textAlign: "center" }}>Item</th>
                <th style={{ textAlign: "center" }}>Price</th>
                <th style={{ textAlign: "center" }}></th>
              </tr>
            </thead>
            <tbody>
              {
                list !== 0 ?
                  (list.map(row => (
                    <tr key={row.name}>
                      <td style={{ textAlign: "center" }}>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.price}</td>

                      <td style={{ alignItems: "center", width: "2px" }}>
                        <button id={row.id} className="form-btni" onClick={() => {this.props.handleEdit(row.id) }} size="sm" > Edit</button>
                      </td>
                    </tr>
                  ))) : null
              }
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}
