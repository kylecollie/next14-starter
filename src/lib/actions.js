'use server';

import { signIn, signOut } from "./auth";


export const handleGithubLogin = async () =>
{
    await signIn('github');
};

export const handleLogout = async () =>
{
    await signOut();
};

export const regiter = async (formData) =>
{
    const { username, email, password } = Object.fromEntries(formData);

    
};