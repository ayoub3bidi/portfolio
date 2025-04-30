---
title: "Quick Tutorial: Implementing Google OAuth2 in FastAPI (Callback Method)"
published: 2025-05-01
description: ""
image: "./covers/google.png"
tags: ["fastapi", "google"]
category: My tech journey
draft: false
---

----------

Hey there! 👋 Let's learn how to get user information from Google using the OAuth2 callback method in FastAPI. We'll keep it super simple and focused!

## What We're Building

We'll create two endpoints:
1. One that gives us a Google login URL
2. Another that receives Google's callback and gets user info

That's it! No complicated stuff, just the basics to get rolling.

## Prerequisites

```bash
pip install fastapi requests
```

## Step 1: Set Up Your Environment Variables

```env
OIDC_GOOGLE_CLIENT_ID=your-client-id
OIDC_GOOGLE_CLIENT_SECRET=your-client-secret
OIDC_GOOGLE_REDIRECT_URI=http://localhost:8000/auth/google
```

## Step 2: Create Your Google Handler

Create a file called `google.py`:

```python
import requests

def get_user_infos_from_google_token_url(code):
    # Exchange the code for tokens
    token_response = requests.post(
        "https://oauth2.googleapis.com/token",
        data={
            "code": code,
            "client_id": OIDC_GOOGLE_CLIENT_ID,
            "client_secret": OIDC_GOOGLE_CLIENT_SECRET,
            "redirect_uri": OIDC_GOOGLE_REDIRECT_URI,
            "grant_type": "authorization_code",
        }
    )
    
    # Get the access token
    access_token = token_response.json().get("access_token")
    
    # Use the access token to get user info
    user_info = requests.get(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        headers={"Authorization": f"Bearer {access_token}"}
    ).json()
    
    return {
        "status": bool(user_info),
        "user_infos": user_info
    }
```

## Step 3: Create Your FastAPI Routes

Create your routes file:

```python
from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.get("/google/login")
async def login_google():
    # Build the Google login URL
    params = {
        "response_type": "code",
        "client_id": OIDC_GOOGLE_CLIENT_ID,
        "redirect_uri": OIDC_GOOGLE_REDIRECT_URI,
        "scope": "openid email profile"
    }
    
    # Create the query string
    query_string = "&".join(f"{key}={value}" for key, value in params.items())
    
    # Return the full auth URL
    return {
        "url": f"https://accounts.google.com/o/oauth2/v2/auth?{query_string}"
    }

@router.get("/google")
async def auth_google(code: str = None):
    if not code:
        raise HTTPException(status_code=400, detail="No code provided")
    
    # Get user info using the code
    result = get_user_infos_from_google_token_url(code)
    
    if not result['status']:
        raise HTTPException(status_code=400, detail="Couldn't get user info")
    
    # Return the user info!
    return result['user_infos']
```

## How to Use It

1. Hit `/google/login` to get your Google login URL:
```python
response = requests.get("http://localhost:8000/auth/google/login")
login_url = response.json()["url"]
```

2. Open that URL in a browser. After login, Google will redirect to your callback URL with a code.

3. Your callback endpoint will automatically:
   - Grab the code from the URL
   - Exchange it for an access token
   - Use the token to get user info
   - Return the user info to you!

The user info you get back will look something like this:
```json
{
    "id": "1234567890",
    "email": "user@example.com",
    "verified_email": true,
    "name": "John Doe",
    "picture": "https://lh3.googleusercontent.com/..."
}
```

That's all there is to it! Now you can use this user info however you want - create accounts, log people in, whatever you need! 🚀

## Testing It Out

The easiest way to test:
1. Start your FastAPI server
2. Visit `/docs` in your browser
3. Try the `/google/login` endpoint
4. Click the URL it gives you
5. Watch the magic happen!

Happy coding! 🎉

-----------
This article is also available on:  
* [DEV](https://dev.to/ayoub3bidi/quick-tutorial-implementing-google-oauth2-in-fastapi-callback-method-ba4)