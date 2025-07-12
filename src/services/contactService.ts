import api from "@/app/config/axiosConfig"

const sendEmail = async (contact: {name: string, email: string, message: string}) => {
   const response = await api.post('/contact', contact);
   return response
}

export default sendEmail;
