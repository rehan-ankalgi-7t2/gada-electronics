import React from 'react';
import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {
    useDeleteUserMutation,
    useGetUsersQuery,
} from '../../slices/usersApiSlice';
import { toast } from 'react-toastify';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router';

const UserListScreen = () => {
    const { data: users, refetch, isLoading, error } = useGetUsersQuery();
    const navigate = useNavigate();

    const [deleteUser] = useDeleteUserMutation();

    const deleteHandler = async (id) => {
        if (window.confirm('Are you sure')) {
            try {
                await deleteUser(id);
                refetch();
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };

    return (
        <div className='p-4'>
            <h1>Users</h1>
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>
                    {error?.data?.message || error.error}
                </Message>
            ) : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>
                                    <a href={`mailto:${user.email}`}>{user.email}</a>
                                </td>
                                <td>
                                    {user.isAdmin ? (
                                        <FaCheck style={{ color: 'green' }} />
                                    ) : (
                                        <FaTimes style={{ color: 'red' }} />
                                    )}
                                </td>
                                <td style={{
                                    gap: 4,
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                }}>
                                    {!user.isAdmin && (
                                        <>
                                            <Button
                                                onClick={() => navigate(`/admin/user/${user._id}/edit`)}
                                                variant='contained'
                                                color='primary'
                                                disableElevation
                                            >
                                                <EditOutlined />
                                            </Button>
                                            <Button
                                                variant='contained'
                                                color='error'
                                                onClick={() => deleteHandler(user._id)}
                                                disableElevation
                                            >
                                                <DeleteOutline />
                                            </Button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default UserListScreen;