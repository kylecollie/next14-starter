'use server';

import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";
import bcypt from 'bcryptjs';


export const handleGithubLogin = async () =>
{
    await signIn('github');
};

export const handleLogout = async () =>
{
    await signOut();
};

export const register = async (previousState, formData) =>
{
    const { username, email, password, passwordRepeat, img } = Object.fromEntries(formData);

    if (password !== passwordRepeat) return { error: 'Passwords do not match' };

    try
    {
        connectToDb();

        const user = await User.findOne({ username });

        if (user) return { error: 'Username already exists' };

        const salt = await bcypt.genSalt(10);
        const hashedPassword = await bcypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img
        });

        await newUser.save();
        console.log("saved to db");

        return { success: true };

    } catch (error)
    {
        console.log(error);
        return { error: error.message };
    }

};
export const login = async (previousState, formData) =>
{
    const { username, password, } = Object.fromEntries(formData);

    try
    {
        await signIn('credentials', {
            username,
            password,
        });
    } catch (error)
    {
        console.log(error);

        if (error.message.includes('CredentialsSignin'))
        {
            return { error: 'Invalid username or password' };
        }

        throw error;
    }

};