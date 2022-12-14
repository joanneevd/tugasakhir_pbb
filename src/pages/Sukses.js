import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "carts")
      .then((res) => {
        const carts = res.data;
        carts.map(function (item) {
          return axios
            .delete(API_URL + "carts/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/sukses.png" width="500" />
        <h2>Receipt dikirim ke Bar dan Kitchen</h2>
        <p>Ceritanya ga pake struk ya mas</p>
        <a href="/Home">
          <Button variant="primary">Order</Button>{" "}
        </a>
        <a href="/">
          <Button variant="primary">Close</Button>{" "}
        </a>
      </div>
    );
  }
}
