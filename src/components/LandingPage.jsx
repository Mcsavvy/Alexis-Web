import * as React from 'react';
import {
    AiOutlineQuestionCircle,
    AiOutlineUser,
    AiOutlineProject,
} from 'react-icons/ai';
import { FiList } from 'react-icons/fi';
import { GiBrain } from 'react-icons/gi';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';
import Layout from './Layout';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const API_URL = import.meta.env.VITE_API_URL;

function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function clearCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export default function LandingPage() {
    const { isAuthenticated, login, logout, user } = useKindeAuth();

    React.useEffect(() => {
        if (isAuthenticated) {
            const token = getCookie('access_token');
            if (token) return;
            console.log("user", user);
            fetch(`${API_URL}/auth/authenticate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: user.given_name,
                    last_name: user.family_name,
                    email: user.email,
                    picture: user.picture,
                    kinde_user: user.id,
                }),
            })
                .then((res) => res.json())
                .then(({ token }) => {
                    console.log("token", token);
                    setCookie('access_token', token, 1);
                });
        }
    }, [isAuthenticated]);

    function handleLogin() {
        login().then(() => {
            console.log(user);
        })
    }

    function handleLogout() {
        clearCookie('access_token');
        logout();
    }

    return (
        <Layout joinButton={false} actions={[]}>
            {/* Hero Section */}
            <section className="text-center py-20 bg-gray-50">
                <img src="/logo.png" alt="Alexis Logo" className="mx-auto h-20 mb-4" />
                <h1 className="text-5xl font-bold">Meet Alexis</h1>
                <h1 className="text-4xl font-bold">Your ALX Study Buddy</h1>
                <p className="text-xl text-gray-600 mt-4">
                    Real-time Assistance. Personalized Learning. Enhanced Outcomes.
                </p>
                <button
                    className="mt-8 inline-block bg-light-primary text-dark-text font-bold py-2 px-4 rounded"
                    onClick={isAuthenticated ? handleLogout : handleLogin}
                >
                    {isAuthenticated ? 'Logout' : 'Get Started'}
                </button>
            </section>

            {/* Features Section */}
            <section className="container mx-auto py-20">
                <div className="grid grid-cols-3 gap-8">
                    {/* General Context */}
                    <div className="text-center">
                        <AiOutlineQuestionCircle className="mx-auto text-4xl text-light-icon hover:text-light-primary" />
                        <p className="mt-4">
                            General Q&A support for a wide range of subjects.
                        </p>
                    </div>

                    {/* Project Context */}
                    <div className="text-center">
                        <AiOutlineProject className="mx-auto text-4xl text-light-icon hover:text-light-primary" />
                        <p className="mt-4">
                            Project-specific assistance to guide your learning journey.
                        </p>
                    </div>

                    {/* Task Context */}
                    <div className="text-center">
                        <FiList className="mx-auto text-4xl text-light-icon hover:text-light-primary" />
                        <p className="mt-4">
                            Task-level guidance to help you manage your studies efficiently.
                        </p>
                    </div>
                </div>
            </section>
            {/* Privacy and User Focus Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <RiShieldUserLine className="mx-auto text-4xl text-light-icon hover:text-light-primary" />
                    <p className="mt-4">
                        Committed to protecting your privacy and ensuring a secure online
                        experience.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto py-20">
                <div className="grid grid-cols-3 gap-8 text-center">
                    <div>
                        <GiBrain className="mx-auto text-4xl text-light-icon hover:text-light-primary" />
                        <p className="mt-4">Enhanced Learning Experience</p>
                    </div>
                    <div>
                        <AiOutlineUser className="mx-auto text-4xl text-light-icon hover:text-light-primary" />
                        <p className="mt-4">Personalized Support</p>
                    </div>
                    <div>
                        <MdOutlineLibraryBooks className="mx-auto text-4xl text-light-icon hover:text-light-primary" />
                        <p className="mt-4">Resource Accessibility</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}