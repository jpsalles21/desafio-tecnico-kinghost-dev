import States from "../States/states";
import UsersByState from "../UsersByState/usersByState";
import { useState } from 'react';
import './style.css';

const UsersContainer = () => {
    const [selectedState, setSelectedState] = useState(null);

    return (
        <div className="container">
            <div className="container__content">
                <div className="states-wrapper">                 
                    <States onStateSelect={setSelectedState} />
                    <h2 className="states-wrapper__user">Lista de usuários</h2>
                </div>
                {selectedState && <UsersByState state={selectedState} />}
            </div>
        </div>
    );
};

export default UsersContainer;
