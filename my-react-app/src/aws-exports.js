const awsConfig = {
  Auth: {
    region: "us-east-1", // replace with your AWS region
    userPoolId: "us-east-1_ylp0DI9DJ", // your Cognito User Pool ID
    userPoolWebClientId: "1chm00g391gubjoahjbtb0pjdj", // your App Client ID
    oauth: {
      domain: "https://us-east-1ylp0di9dj.auth.us-east-1.amazoncognito.com", // your Cognito domain
      scope: ["email", "openid", "profile"],
      redirectSignIn: "https://d84l1y8p4kdic.cloudfront.net.amplifyapp.com/",
      redirectSignOut: "https://d84l1y8p4kdic.cloudfront.net.amplifyapp.com/",
      responseType: "code"
    }
  }
};

export default awsConfig;
