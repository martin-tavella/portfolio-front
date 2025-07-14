import api from "@/app/config/axiosConfig"


export const getAllProjects = async () => {
    try {
    const response = await api.get('/projects')
    return response.data;
    } catch (err) {
        console.log(err);
        throw new Error
    }
}