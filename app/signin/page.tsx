'use client';

import React from "react";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";

const SignInPage = () => {
    const router = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        console.log(email, password)

        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        // Berhasil
        if (!res.error) {
            router.push('/dashboard')
        } else {
            console.error("Password salah")
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <form onSubmit={onSubmit}>
                <label htmlFor="email">
                    Email
                    <input name="email" id="email"/>
                </label>
                <label htmlFor="password">
                    Password
                    <input name="password" id="password"/>
                </label>
                <input type="submit" value="Sign In"/>
            </form>
        </div>
    )
}

export default SignInPage