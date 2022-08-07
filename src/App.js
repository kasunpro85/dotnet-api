import React, { Component } from 'react';
import { Navbar } from './Components/Navbar'
import { Intro } from './Components/Intro'
import { About } from './Components/About'
import { Menu } from './Components/Menu'
import { AddItem } from './Components/ItemAdd'
import { Footer } from './Components/Footer'
import { Navigate } from "react-router-dom";

const createData = (id, name, price) => {
  return { id, name, price };
}

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [
        createData(1, 'Frozen yoghurt', 159),
        createData(2, 'Ice cream sandwich', 237),
        createData(3, 'Eclair', 262),
        createData(4, 'Cupcake', 305),
        createData(5, 'Gingerbread', 356),
      ]
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleUpdate(newObj) {
    console.log(newObj);
    if (this.state.list[newObj.id - 1] === undefined) {
      this.setState((state) => ({
        list: [...state.list, newObj]
      }));
    }
    else {
      this.state.list[newObj.id - 1].name = newObj.name
      this.state.list[newObj.id - 1].price = newObj.price
      this.setState({ list: this.state.list })
    }
  }

  handleEdit(id) {
    console.log(id);
    if (id > 0) {
      return <Navigate to={'/#itemAdd/' + id} replace={true} />
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <About />
        <Menu list={this.state.list} handleEdit={this.handleEdit} />
        <AddItem id={0} handleUpdate={this.handleUpdate} list={this.state.list} />
        <Footer />

      </div>
    )
  }
}
