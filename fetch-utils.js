const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODAwOCwiZXhwIjoxOTU1MDg0MDA4fQ.H6p9YW2dAP23pqaaylscQ-K2jfn5gOVHKwp3Rl6QQT8';

const SUPABASE_URL = 'https://leodabfhaiokbolltllk.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCars() {
    const response = await client
        .from('Cars')
        .select();
    return response.data;
}

export async function getDesigners() {
    const response = await client
        .from('Card Designers')
        .select();
    return response.data;
}

export async function getTeams() {
    const response = await client
        .from('Favorite Sports Teams')
        .select();
        
    return response.data;
}

export async function getMovies() {
    const response = await client
        .from('Favorite Movies')
        .select();

    return response.data;
}

