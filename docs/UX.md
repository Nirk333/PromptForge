# UX & Feature Spec

## 1. User Authentication & Profile Menu

### OAuth Flows

* **Google OAuth 2.0**

  * **Auth Endpoint:** `GET /auth/google`
  * **Callback URL:** `/auth/google/callback`
  * **Scopes:** `profile`, `email`
  * **Flow:** Redirect to Google consent screen; on callback, exchange code for tokens and retrieve user info.

* **Facebook OAuth 2.0**

  * **Auth Endpoint:** `GET /auth/facebook`
  * **Callback URL:** `/auth/facebook/callback`
  * **Permissions:** `public_profile`, `email`
  * **Flow:** Similar redirect → callback → token exchange → fetch user profile.

### UI Wireframes & Behavior

* **Login Page / Modal**

  * Prominent buttons: “Continue with Google”, “Continue with Facebook”—each triggers appropriate OAuth flow.
  * Option for email/password fallback (future enhancement).
  * **States:**

    * **Loading:** button spinner while redirecting.
    * **Error:** inline error message (e.g., "Login failed, please try again").

* **Profile Dropdown**

  * Accessible via right-top avatar icon.
  * Opens on **click** (desktop) or **tap** (mobile), closes on outside click.
  * Menu Items:

    * **Upgrade Plan** → `/account/upgrade`
    * **Customize** → `/account/customize`
    * **Help** → `/help`
    * **Account Settings** → `/account/settings`

      * **Sub-options:** Theme: auto/system, light, dark.
    * **Log Out** → triggers client-side sign-out and redirects to login.

## 2. Prompt Creation Flow

* Select prompt type (character, technicality, model, task)
* Enter brief idea / keywords
* AI generates draft prompt
* User comments / refines → regenerate loop
* Auto-save & auto-submit draft on reload/close

## 3. Template Management

* Save customized prompts as named templates
* List, edit, delete templates
* Assign templates to models/tasks

## 4. Administrator Backend

* Admin-only UI to select AI provider (OpenAI, Anthropic, etc.)
* View usage metrics per provider

## 5. Frontend MVP Outline

* Basic React/Next.js app
* Pages: Login, Dashboard, Prompt Editor, Templates, Admin
