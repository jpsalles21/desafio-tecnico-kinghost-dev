import { useEffect, useState } from 'react';
import { fetchUsersByState } from '../../api/api';
import './style.css';

const UsersByState = ({ state }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsersByState = async () => {
            try {
                const users = await fetchUsersByState(state);
                setUsers(users);
            } catch (error) {
                console.error(error);
            }
        };
        if (state) {
            getUsersByState();
        }
    }, [state]);

    return (
        <div className="users-by-state">
            <div className="table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={user.image} alt="user profile" className="user-image" />
                                </td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.address.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersByState;