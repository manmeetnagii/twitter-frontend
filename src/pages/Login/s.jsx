const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otp.length === 6 && confirmResult) {
      try {
        await confirmResult.confirm(otp);
        setIsSigning(true);
       
        const systemInfo = {
          phoneNumber: value.replace("+", ""),
          browser: userBrowser,
          os: userOS,
          ip: userIP,
          device: userDevice,  
        };

        const registerUser = async (systemInfo) => {
          try {
            const registerSystemResponse = await axios.post(
              "https://twitter-backend-main.onrender.com/systemInfo",
              { systemInfo },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
           
            return registerSystemResponse.data;
          } catch (error) {
            console.error("Error registering user:", error);
            throw error;
          }
        };

        const data = await registerUser( systemInfo);
        if (data) {
          console.log(data);
          navigate("/");
        }
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("Please enter a six-digit OTP code");
    }
  };
