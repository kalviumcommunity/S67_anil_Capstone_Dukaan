# S67_anil_Capstone_Dukaan

##Using JWTs in application

Whenever a user logs in with their email and password, the backend generates a JWT token and sends it to the frontend.
The frontend stores the token in localStorage for future use.
Whenever the client makes a request (like opening the profile page or updating profile details), the frontend automatically sends the stored token along with the request in the Authorization header.
The backend verifies the token (received from the Authorization header) before allowing access.
If the token is valid, the backend grants access to view or update the profile.

