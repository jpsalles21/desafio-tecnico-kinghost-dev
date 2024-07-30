import { useEffect, useState } from 'react';
import { fetchUsersStates } from '../../api/api';
import './style.css';

const States = ({ onStateSelect }) => {
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');

    useEffect(() => {
        const getStates = async () => {
            try {
                const fetchedStates = await fetchUsersStates();
                setStates(fetchedStates);
            } catch (error) {
                console.error(error);
            }
        };
        getStates();
    }, []);

    const handleChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        onStateSelect(state);
    };

    return (
        <div className="states">
            <div className="select-container">
                <h2>Estados</h2>
                <select
                    className="select-dropdown"
                    value={selectedState}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecione um estado</option>
                    {states.map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default States;
