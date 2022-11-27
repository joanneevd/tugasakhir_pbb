import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, ListCategories, Menus, NavbarComponent } from "../components";
import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriYangDipilih: "Makanan",
      carts: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoriYangDipilih)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });

    axios
      .get(API_URL + "carts")
      .then((res) => {
        const carts = res.data;
        this.setState({ carts });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  componentDidUpdate(prevState) {
    if(this.state.carts !== prevState.carts) {
      axios
      .get(API_URL + "carts")
      .then((res) => {
        const carts = res.data;
        this.setState({ carts });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
    }
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: [],
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  masukKeranjang = (value) => {
    axios
      .get(API_URL + "carts?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };

          axios
            .post(API_URL + "carts", keranjang)
            .then((res) => {
              swal({
                title: "Add to Cart",
                text: keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error yaa ", error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + "carts/" + res.data[0].id, keranjang)
            .then((res) => {
              swal({
                title: "Add to Cart",
                text: keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error yaa ", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  render() {
    const { menus, categoriYangDipilih, carts } = this.state;
    return (
      
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories
              changeCategory={this.changeCategory}
              categoriYangDipilih={categoriYangDipilih} />
            <Col className="mt-3">
              <h4>
                <strong>Products</strong>
              </h4>
              <hr />
              <Row className="overflow-auto menu">
                {menus &&
                  menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                      masukKeranjang={this.masukKeranjang} />
                  ))}
              </Row>
            </Col>
            <Hasil carts={carts} {...this.props} />
          </Row>
        </Container>
      </div>
    );
  }
}
