<script setup lang="ts">
import { ref } from 'vue';
// import Logo from '@/layouts/full/logo/Logo.vue';
/*Social icons*/
import google from '@/assets/images/svgs/google-icon.svg';
// import facebook from '@/assets/images/svgs/facebook-icon.svg';

import { useAuthStore } from '@/stores/auth';
import { Form } from 'vee-validate';

// const checkbox = ref(false);
const valid = ref(false);
// const show1 = ref(false);
const password = ref('rjn@123');
const username = ref('rjn@gmail.com');
const passwordRules = ref([
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);
const usernameRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);
const firstname = ref('Rajan');
const lastname = ref('Shah');
const firstnameRules = ref([
    (v: string) => !!v || 'First name is required',
    (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters'
]);
const lastnameRules = ref([
    (v: string) => !!v || 'Last name is required',
    (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters'
]);

async function validate(values: any, { setErrors }: any) {
    const authStore = useAuthStore();
    return authStore.register(username.value, password.value, firstname.value, lastname.value).catch((error: any) => setErrors({ apiError: error }));
}
</script>
<template>
    <!-- <v-form @submit="validate" ref="form" v-model="valid" v-slot="{ errors, isSubmitting }" lazy-validation
        action="/pages/boxedlogin" class="mt-5"> -->
    <Form @submit="validate" v-slot="{ errors, isSubmitting }" class="mt-5">
        <v-label class="text-subtitle-1 font-weight-medium pb-2">First name</v-label>
        <VTextField v-model="firstname" :rules="firstnameRules" required></VTextField>
        <v-label class="text-subtitle-1 font-weight-medium pb-2">Last name</v-label>
        <VTextField v-model="lastname" :rules="lastnameRules" required></VTextField>
        <v-label class="text-subtitle-1 font-weight-medium pb-2">Username</v-label>
        <VTextField v-model="username" :rules="usernameRules" required></VTextField>
        <v-label class="text-subtitle-1 font-weight-medium pb-2">Password</v-label>
        <VTextField v-model="password" :counter="10" :rules="passwordRules" required variant="outlined" type="password"
            color="primary"></VTextField>
        <!-- <v-btn :loading="isSubmitting" size="large" class="mt-2" color="primary" block submit flat>Sign Up</v-btn> -->
        <v-btn size="large" :loading="isSubmitting" color="primary" :disabled="valid" block type="submit" flat>Sign
            Up</v-btn>
        <div v-if="errors.apiError" class="mt-2">
            <v-alert color="error">{{ errors.apiError }}</v-alert>
        </div>
    </Form>
    <!-- </v-form> -->

    <div class="d-flex align-center text-center my-6">
        <div class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative">
            <span class="bg-surface px-5 py-3 position-relative">or sign up with</span>
        </div>
    </div>

    <v-row class="d-flex mb-6">
        <v-col>
            <!-- <v-col cols="6" sm="6"> -->
            <v-btn variant="outlined" size="large" class="border text-subtitle-1" block>
                <img :src="google" height="20" class="mr-2" alt="google" />
                <span class="d-sm-flex d-none mr-1">Sign up with</span>Google
            </v-btn>
        </v-col>
        <!-- <v-col cols="6" sm="6">
            <v-btn variant="outlined" size="large" class="border text-subtitle-1" block>
                <img :src="facebook" width="25" height="30" class="mr-1" alt="facebook" />
                <span class="d-sm-flex d-none mr-1">Sign up with</span>FB
            </v-btn>
        </v-col> -->
    </v-row>
</template>
