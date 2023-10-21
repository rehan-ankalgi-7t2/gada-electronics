import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <div>
      <Hero />
      <Container className="my-5">
        <h1>Latest Products</h1>
        <Row mb="3">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message
              variant="danger"
              children={error?.data?.message || error?.error}
            />
          ) : (
            <>
              {data?.products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
