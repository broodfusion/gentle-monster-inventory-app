// @material-ui/core components
// @material-ui/icons
import withStyles from "@material-ui/core/styles/withStyles";
import Close from "@material-ui/icons/Close";
import Create from "@material-ui/icons/Create";
import Dvr from "@material-ui/icons/Dvr";
import { startRemoveProduct } from "actions/products";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Button from "components/CustomButtons/Button.jsx";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import CreateProductModal from "components/Modal/CreateProductModal";
import EditProductModal from "components/Modal/EditProductModal";
import React from "react";
// import ImageModal from 'components/Modal/index.jsx';
import ImageModal from "react-modal-image";
import { connect } from "react-redux";
// react component for creating dynamic tables
import ReactTable from "react-table";
import columns from "variables/columns";

const styles = theme => ({
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  imgContainer: {
    width: "120px",
    maxHeight: "160px",
    overflow: "hidden",
    display: "block"
  },

  img: {
    width: "100%",
    height: "auto",
    verticalAlign: "middle",
    border: "0"
  },
  createButton: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class ReactTables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: false,
      create: false,
      edit: false,
      itemState: {}
    };
  }

  handleClickOpen = modal => {
    var x = [];
    x[modal] = true;
    this.setState(x);
    // this.setState({ open: false });
  };
  handleClose = modal => {
    // this.setState({ open: false });
    var x = [];
    x[modal] = false;
    this.setState({ itemState: {} });
    this.setState(x);
  };
  render() {
    const { classes, products, startRemoveProduct } = this.props;
    const data = products.map((item, key) => {
      return {
        ...item,
        image: (
          <div className={classes.imgContainer}>
            <ImageModal
              small={item.ImageUrl}
              medium={item.ImageUrl}
              alt={item.ItemName}
            />
          </div>
        ),
        actions: (
          <div className="actions-right">
            <Button
              justIcon
              round
              simple
              onClick={() => {
                this.setState({ itemState: item });
                this.handleClickOpen("edit");
              }}
              color="warning"
              className="edit"
            >
              <Dvr />
            </Button>{" "}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                startRemoveProduct(item.id);
              }}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>{" "}
          </div>
        )
      };
    });
    return (
      <div>
        <Header />
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="primary" icon>
                <CardIcon
                  style={{ cursor: "pointer" }}
                  color="success"
                  onClick={() => this.handleClickOpen("create")}
                >
                  <Create />
                </CardIcon>
                <h2 className={classes.cardIconTitle}>Gentle Monster</h2>
              </CardHeader>
              <CardBody>
                <EditProductModal
                  item={this.state.itemState}
                  open={this.state.edit}
                  onClose={() => this.handleClose("edit")}
                />
                <CreateProductModal
                  item={this.state.itemState}
                  open={this.state.create}
                  onClose={() => this.handleClose("create")}
                />
                <ImageModal
                  open={this.state.image}
                  onClose={() => this.handleClose("image")}
                />
                <ReactTable
                  data={data}
                  filterable
                  defaultFilterMethod={(filter, row, column) => {
                    const id = filter.pivotId || filter.id;
                    return row[id] !== undefined
                      ? String(row[id]).startsWith(filter.value)
                      : true;
                  }}
                  columns={columns}
                  defaultPageSize={25}
                  pageSizeOptions={[25, 50, 100]}
                  showPaginationTop
                  showPaginationBottom
                  style={{
                    height: "1000px"
                  }}
                  className="-striped -highlight -fixed"
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
// export default (ReactTables);

const mapStateToProps = ({ products }) => {
  return {
    products
  };
};

const mapDispatchToProps = dispatch => ({
  startRemoveProduct: id => dispatch(startRemoveProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ReactTables));
