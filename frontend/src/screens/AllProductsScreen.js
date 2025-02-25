import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Product from '../components/Product'
import ProductFilter from '../components/ProductFilter'

const AllProductsScreen = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useGetProductsQuery({ keyword: searchTerm, pageNumber: page });

  return (
    <div style={{minHeight: "100vh"}}>
          <Container className="my-5">
              <h1>All Products</h1>
              <ProductFilter/>
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
  )
}

export default AllProductsScreen
