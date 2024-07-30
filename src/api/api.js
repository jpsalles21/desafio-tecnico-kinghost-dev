import axios from 'axios';

const url = 'https://dummyjson.com/users?limit=1000';

export const fetchUserStates = async () => {
    try {
        const response = await axios.get(url);
        const users = response.data.users;
        return getUniqueSortedStates(users);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchUsersByState = async (state) => {
    try {
        const response = await axios.get(url);
        const users = response.data.users;
        return getUsersByState(users, state);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchUserImages = async () => {
    try {
        const response = await axios.get(url);
        const users = response.data.users;
        return users.map(user => ({id: user.id, image: user.image}));
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const getUniqueSortedStates = (users) => {
    const uniqueStates = new Set(users.map(user => user.address.state));
    return [...uniqueStates].sort((a, b) => a.localeCompare(b));
};

const getUsersByState = (users, state) => {
    return users.filter(user => user.address.state === state).sort((a, b) => a.firstName.localeCompare(b.firstName));
};