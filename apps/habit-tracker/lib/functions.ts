import axios from 'axios';
import { toast } from 'sonner';

export async function singUpHandler(fullName: string, email: string, password: string): Promise<SignUpResponse> {
    const response = await axios.post<LoginResponse>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`, 
        {
            fullName: fullName,
            email: email,
            password: password
        }
    );
    return response.data;
}

export async function loginHandler(email: string, password: string): Promise<LoginResponse> {
    const response = await axios.post<SignUpResponse>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
        {
            email: email,
            password: password
        }
    );
    return response.data;
}