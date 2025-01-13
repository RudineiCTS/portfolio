const axios = require('axios');

const username = 'rudineicts'; 
export async function fetchRepositories() {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao buscar repositórios:');
        throw error;
    }
}
