import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        // user: JSON.parse(localStorage.getItem('user')),
        user: null,
        returnUrl: null
    }),
    actions: {
        async login(username: string, password: string) {
            // const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
            const response = await fetchWrapper.post(`http://localhost:1337/user/login`, { username, password });

            if (response.response) {
                const error = response.response.data;
                return Promise.reject(error);
            }
            else {
                // update pinia state
                this.user = response.data;
                // store user details and jwt in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(response.data));
                // redirect to previous url or default to home page
                router.push('/future/market-heatmap');
                // router.push(this.returnUrl || '/future/market-heatmap');
            }
        },
        async register(username: string, password: string, firstname: string, lastname: string) {
            const response = await fetchWrapper.post(`http://localhost:1337/user/signup`, { username, password, firstname, lastname });
            console.log(response);
            if (response.response) {
                const error = response.response.data;
                return Promise.reject(error);
            }
            else {
                router.push('/');
            }
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/');
        }
    }
});
