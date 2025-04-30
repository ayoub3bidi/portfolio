---
title: "Quick Tutorial: Adding Google Auth to FastAPI (Token Method)"
published: 2025-05-01
description: ""
image: "./covers/google.png"
tags: ["fastapi", "google"]
category: My tech journey
draft: false
---

----------

Hey there! 👋 Let's dive into implementing Google authentication in your FastAPI application using the token method. This is perfect when you're working with frontend frameworks like React and want to handle Google Sign-In without dealing with complex OAuth2 flows.

## What We'll Cover

We'll focus specifically on verifying Google tokens and extracting user information on the backend. This approach works great with frontend libraries like `@react-oauth/google` that handle the Google Sign-In button and initial authentication flow.

## Prerequisites

Before we start, make sure you have:
- A FastAPI application set up
- A Google Cloud Project with OAuth2 credentials
- The following Python packages installed:
  ```bash
  pip install fastapi google-auth requests python-jose
  ```

## The Code

First, let's create a utility function to verify Google tokens and extract user information. Create a file called `google.py`:

```python
from google.auth.transport import requests as google_requests
from google.oauth2 import id_token

def get_user_infos_from_google_token(id_token_str):
    # Verify the token and get user info
    id_info = id_token.verify_oauth2_token(
        id_token_str, 
        google_requests.Request(), 
        OIDC_GOOGLE_CLIENT_ID  # Your Google Client ID from env variables
    )
    
    user_infos = {
        'id': id_info['sub'],  # Google's unique identifier for the user
        'email': id_info.get('email'),
    }
    
    if not user_infos:
        return {
            "status": False,
            "user_infos": user_infos
        }
    
    return {
        "status": True,
        "user_infos": user_infos
    }
```

Now, let's create the endpoint that will handle the Google authentication. This goes in your routes file:

```python
from fastapi import APIRouter, HTTPException, status
from datetime import timedelta

router = APIRouter()

@router.get("/google")
async def auth_google(credential: str = None):
    if not credential:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="No credential provided."
        )
    
    # Verify the Google token
    check = get_user_infos_from_google_token(credential)
    if check['status'] is False:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="Invalid credential"
        )
    
    user_infos = check['user_infos']
    
    # Here you would typically:
    # 1. Check if the user exists in your database
    # 2. Create a new user if they don't exist
    # 3. Generate your application's JWT token
    
    # For example:
    access_token = create_access_token(
        data={"sub": user_infos['email']},
        expires_delta=timedelta(minutes=30)
    )
    
    return {"token": access_token}
```

## How It Works

1. The frontend handles the Google Sign-In flow and gets a credential token from Google
2. Your frontend sends this token to your `/google` endpoint
3. The backend verifies the token using Google's libraries
4. If valid, you get the user's information (like email and Google ID)
5. You can then create a session, JWT token, or whatever authentication mechanism you're using in your app

## Environment Variables

Make sure to set up these environment variables:
```env
OIDC_GOOGLE_CLIENT_ID=your-google-client-id
ACCESS_TOKEN_EXPIRE_MINUTES=30  # or whatever duration you prefer
```

## Frontend Integration

On your React frontend, you'd typically have something like this:

```javascript
import { GoogleLogin } from '@react-oauth/google';

function Login() {
  const handleSuccess = async (credentialResponse) => {
    const response = await fetch('/api/google?credential=' + credentialResponse.credential);
    const data = await response.json();
    // Store the token, update your auth state, etc.
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log('Login Failed')}
    />
  );
}
```

That's it! This setup gives you a clean way to handle Google authentication using tokens. Remember to add proper error handling and user management based on your application's needs.

## Security Notes

- Always verify tokens server-side
- Keep your Google Client ID secure
- Consider adding rate limiting to your auth endpoints
- Store user tokens securely in your frontend (preferably in HTTP-only cookies)

Happy coding! 🚀

-----------
This article is also available on:  
* [DEV](https://dev.to/ayoub3bidi/quick-tutorial-adding-google-auth-to-fastapi-token-method-1ggg)