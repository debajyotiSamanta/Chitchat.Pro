import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Switch } from "../../components/ui/switch";

export const Box = (): JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear errors when typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Redirect to next page
      alert("Form submitted successfully! Redirecting...");
      // In a real app, you would use React Router or similar for navigation
      // window.location.href = "/dashboard";
    }
  };

  const handleGoogleSignUp = () => {
    alert("Continuing with Google! Redirecting...");
    // In a real app, you would implement OAuth with Google
    // window.location.href = "/dashboard";
  };

  const handleSignIn = () => {
    alert("Redirecting to sign in page...");
    // In a real app, you would use React Router or similar for navigation
    // window.location.href = "/signin";
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Apply theme class on component mount and cleanup on unmount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="w-full h-full" data-model-id="2007:15-frame">
      <div className="fixed w-full h-full top-0 left-0 rounded-[5px] overflow-hidden border border-dashed border-[#8a38f5]">
        <div className={`relative w-full h-full bg-[#f5f7fa] dark:bg-gray-900 flex justify-center items-center`}>
          {/* Logo */}
          <div className="absolute w-[76px] h-[76px] top-[25px] left-[25px] bg-[#a287ff] rounded-[50px] shadow-md flex items-center justify-center">
            <span className="text-white text-3xl font-bold">A</span>
          </div>

          {/* Theme toggle switch */}
          <div className="absolute h-[62px] top-[25px] right-[25px] bg-[#bcadad] rounded-[40px] flex items-center justify-between px-3 relative overflow-hidden shadow-md">
            {/* Dark circle that moves */}
            <div 
              className={`w-[50px] h-12 bg-black rounded-[25px] absolute transition-all duration-300 z-10 ${
                isDarkMode ? 'translate-x-[60px]' : 'translate-x-0'
              }`} 
            />
            
            {/* Sun icon */}
            <div className={`w-12 h-12 flex items-center justify-center z-20 ${
              !isDarkMode ? 'text-white' : 'text-gray-400'
            }`}>
              ☀️
            </div>
            
            {/* Moon icon */}
            <div className={`w-12 h-12 flex items-center justify-center z-20 ${
              isDarkMode ? 'text-white' : 'text-gray-400'
            }`}>
              🌙
            </div>
            
            {/* Invisible switch for toggling */}
            <Switch 
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-30" 
              checked={isDarkMode} 
              onCheckedChange={toggleTheme} 
            />
          </div>

          {/* Sign up card */}
          <Card className="w-[90%] max-w-[822px] bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-200 transition-all duration-300">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="flex flex-col items-center px-[5%] sm:px-[73px] py-[38px] space-y-6">
                {/* Title */}
                <h1 className="w-full text-center [font-family:'Tai_Heritage_Pro',Helvetica] font-bold text-black dark:text-white text-[40px] sm:text-[64px]">
                  Create an account
                </h1>

                {/* Form fields */}
                <div className="w-full space-y-6">
                  <div className="relative w-full">
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full h-[60px] sm:h-[88px] bg-[#e6e6e6] dark:bg-gray-700 rounded-[25px] border border-solid border-gray-300 dark:border-gray-600 text-2xl sm:text-4xl pl-8 placeholder:text-gray-500 placeholder:text-2xl sm:placeholder:text-3xl font-medium"
                    />
                    {errors.fullName && <p className="text-red-500 mt-1 text-sm">{errors.fullName}</p>}
                  </div>
                  
                  <div className="relative w-full">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-[60px] sm:h-[88px] bg-[#e6e6e6] dark:bg-gray-700 rounded-[25px] border border-solid border-gray-300 dark:border-gray-600 text-2xl sm:text-4xl pl-8 placeholder:text-gray-500 placeholder:text-2xl sm:placeholder:text-3xl font-medium"
                    />
                    {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
                  </div>
                  
                  <div className="relative w-full">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password(min 6 chars)"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full h-[60px] sm:h-[88px] bg-[#e6e6e6] dark:bg-gray-700 rounded-[25px] border border-solid border-gray-300 dark:border-gray-600 text-2xl sm:text-4xl pl-8 placeholder:text-gray-500 placeholder:text-2xl sm:placeholder:text-3xl font-medium"
                    />
                    {errors.password && <p className="text-red-500 mt-1 text-sm">{errors.password}</p>}
                  </div>

                  {/* Sign Up button */}
                  <div className="flex justify-center mt-4">
                    <Button 
                      type="submit"
                      className="w-full sm:w-[411px] h-[60px] sm:h-[88px] bg-[#5f90d6] hover:bg-[#4a7ac0] rounded-[40px] border-none shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <span className="[font-family:'Tai_Heritage_Pro',Helvetica] font-bold text-white text-3xl sm:text-5xl">
                        Sign Up
                      </span>
                    </Button>
                  </div>

                  {/* Google sign up button */}
                  <div className="w-full mt-4">
                    <Button
                      type="button"
                      onClick={handleGoogleSignUp}
                      variant="outline"
                      className="w-full h-[60px] sm:h-[89px] rounded-[25px] border border-solid border-gray-300 dark:border-gray-600 flex items-center justify-center bg-[#e6e6e6] dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                    >
                      <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-[#4c96ff] rounded-[50px] mr-3 sm:mr-6 flex items-center justify-center text-white font-bold shadow-md">G</div>
                      <span className="[font-family:'Tai_Heritage_Pro',Helvetica] font-normal text-black dark:text-white text-xl sm:text-[32px]">
                        Continue with Google
                      </span>
                    </Button>
                  </div>

                  {/* Sign in link */}
                  <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-2">
                    <p className="[font-family:'Tai_Heritage_Pro',Helvetica] font-normal text-black dark:text-white text-xl sm:text-2xl">
                      Already have an account ?
                    </p>
                    <Button
                      type="button"
                      onClick={handleSignIn}
                      variant="link"
                      className="[font-family:'Tai_Heritage_Pro',Helvetica] font-normal text-[#0030f1] dark:text-[#4c96ff] text-xl sm:text-2xl hover:underline transition-all"
                    >
                      Sign in
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
