import { Table, Row, Col } from 'react-bootstrap';
import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import {
    useGetProductsQuery,
    useDeleteProductMutation,
    useCreateProductMutation,
} from '../../slices/productsApiSlice';
import { toast } from 'react-toastify';
import React from 'react';
import { AddOutlined, DeleteOutline, EditOutlined } from '@mui/icons-material';

const ProductListScreen = () => {
    const { pageNumber } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, error, refetch } = useGetProductsQuery({
        pageNumber,
    });

    const [deleteProduct, { isLoading: loadingDelete }] =
        useDeleteProductMutation();

    const deleteHandler = async (id) => {
        if (window.confirm('Are you sure')) {
            try {
                await deleteProduct(id);
                refetch();
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };

    const [createProduct, { isLoading: loadingCreate }] =
        useCreateProductMutation();

    const createProductHandler = async () => {
        if (window.confirm('Are you sure you want to create a new product?')) {
            try {
                await createProduct();
                refetch();
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };

    return (
        <>
            <Row className='align-items-center p-4'>
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className='text-end'>
                    <Button color='primary' variant='contained' disableElevation onClick={createProductHandler} endIcon={<AddOutlined/>}>Create Product</Button>
                </Col>
            </Row>

            {loadingCreate && <Loader />}
            {loadingDelete && <Loader />}
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error.data.message}</Message>
            ) : (
                <div className='p-4'>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>CATEGORY</th>
                                <th>BRAND</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.products.map((product) => (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>
                                        <img src={product.image} alt={product.name} style={{
                                            height: 32,
                                            width: 'auto'
                                        }}/>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td style={{
                                        gap: 4,
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}>
                                        <Button
                                            onClick={() => navigate(`/admin/product/${product._id}/edit`)}
                                            variant='contained'
                                            color='primary'
                                            disableElevation
                                        >
                                            <EditOutlined />
                                        </Button>
                                        <Button
                                            variant='contained'
                                            color='error'
                                            onClick={() => deleteHandler(product._id)}
                                            disableElevation
                                        >
                                            <DeleteOutline/>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Paginate pages={data.pages} page={data.page} isAdmin={true} />
                </div>
            )}
        </>
    );
};

export default ProductListScreen;