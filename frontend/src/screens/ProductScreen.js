import { Button } from "@mui/material";
import { useParams } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Row, Col, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { List, ListItem } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const { data, isLoading, error } = useGetProductDetailsQuery(productId);
  const product = data?.productData[0];

  return (
    <>
      <Container style={{ minHeight: "88vh" }}>
        <Link to="/">
          <Button
            startIcon={<ArrowBackIosNewIcon />}
            className="my-3"
            color="appleBlack"
            // variant="outlined"
          >
            back
          </Button>
        </Link>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message
            variant="danger"
            children={error?.data?.message || error?.error}
          />
        ) : (
          // console.log(data?.productData[0])
          <Row>
            <Col md={8}>
              <Image src={product.image} fluid />
            </Col>
            <Col md={4}>
              <List>
                <ListItem disablePadding>
                  <Col>
                    <h3>{product.name}</h3>
                  </Col>
                </ListItem>
                <ListItem disablePadding>
                  <Col>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </Col>
                </ListItem>
                <ListItem disablePadding>
                  <Col>
                    <h4>${product.price}</h4>
                  </Col>
                </ListItem>
                <ListItem disablePadding>
                  Status:{" "}
                  {product.countInStock > 0 ? "In Stock" : "Out of stock"}
                </ListItem>
                <ListItem disablePadding className="mt-4">
                  <Col>
                    <Button
                      size="large"
                      sx={{
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "24px",
                        width: "100%",
                        borderRadius: "0",
                      }}
                      color="white"
                      variant="contained"
                      endIcon={<AddShoppingCartIcon />}
                      disabled={product.countInStock < 0}
                    >
                      Add to cart
                    </Button>
                  </Col>
                </ListItem>
                <ListItem disablePadding className="mt-3">
                  <Col>
                    <p>{product.description}</p>
                  </Col>
                </ListItem>
              </List>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProductScreen;
