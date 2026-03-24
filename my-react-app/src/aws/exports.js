const awsConfig = {
  Auth: {
    region: "ap-south-1", // replace with your AWS region
    userPoolId: "ap-south-1_XXXXXXX", // your Cognito User Pool ID
    userPoolWebClientId: "XXXXXXXXXXXX", // your App Client ID
  }
};

export default awsConfig;
