import React from 'react';
import googleLogo from '../../assets/search.png'; 

const SocialLogin = ({ onGoogleSignIn, isLoading }) => {
    return (
        <div className="space-y-2">
            <button
                type="button"
                onClick={onGoogleSignIn}
                disabled={isLoading}
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;