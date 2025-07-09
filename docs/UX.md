# UX & Feature Spec

## 1. User Authentication & Profile Menu

### OAuth Flows

* **Google OAuth 2.0**

  * **Auth Endpoint:** `GET /auth/google`
  * **Callback URL:** `/auth/google/callback`
  * **Scopes:** `profile`, `email`
  * **Flow:** Redirect → consent screen → callback → exchange code → fetch user info → create/update user record → issue session or JWT.

* **Facebook OAuth 2.0**

  * **Auth Endpoint:** `GET /auth/facebook`
  * **Callback URL:** `/auth/facebook/callback`
  * **Permissions:** `public_profile`, `email`
  * **Flow:** Redirect → Facebook consent → callback → token exchange → fetch profile → session creation.

### UI Wireframes & Behavior

* **Login Page / Modal**

  * Full-screen or centered modal on `/login`
  * Buttons:

    * `Continue with Google` (primary style)
    * `Continue with Facebook` (secondary)
    * Future: Email & password form toggle
  * **States:**

    * **Idle:** all buttons active
    * **Loading:** button shows spinner and disabled
    * **Error:** inline alert above buttons

* **Profile Dropdown**

  * Trigger: Avatar icon in top-right nav bar
  * Interaction: click/tap opens menu; click outside or on item closes
  * **Menu Items & Routes**:

    * **Upgrade Plan** → `/account/upgrade`
    * **Customize** → `/account/customize`
    * **Help** → `/help`
    * **Account Settings** → `/account/settings`

      * Toggle theme: system / light / dark
    * **Log Out** → calls `/auth/logout`, clears session, redirects `/login`

---

## 2. Prompt Creation Flow

### UI Layout

1. **Sidebar / Topbar**: navigation links (Dashboard, Templates, Admin)
2. **Prompt Editor Panel**:

   * **Dropdowns**:

     * Prompt Type: Character | Technical | Task | Custom
     * Model: GPT-4 | GPT-3.5 | Anthropic | Custom
   * **Text Area**: placeholder “Describe what you need…”
   * **Action Buttons**:

     * `Generate Draft` (primary)
     * `Regenerate` (secondary, appears after first draft)
     * `Save Template` (disabled until draft exists)

### State Transitions

* **Idle**: no draft generated
* **Generating**: spinner overlay on text area, buttons disabled
* **Success**: draft appears below editor, `Regenerate` & `Save Template` enabled
* **Error**: inline error card with retry option

### Feedback Loop

1. User selects options & clicks **Generate Draft**
2. AI returns draft prompt below editor
3. User enters comments or edits draft in an inline text field
4. Click **Regenerate** to incorporate edits
5. History panel shows past N drafts with timestamp
6. Inline diff view highlights changes between versions

### Auto-Save & Auto-Submit

* **Auto-Save**:

  * On every keystroke debounce (500ms)
  * On interval (every 30s)
  * Stores draft in localStorage by session ID

* **Auto-Submit**:

  * On window `beforeunload`, if draft not explicitly submitted
  * Calls backend `POST /api/prompts/auto` to reserve AI generation count

---

## 3. Template Management

### UI & Interactions

* **Templates List Page** (`/templates`)

  * Table or card grid of saved templates
  * Columns: Name, Type, Model, Created Date, Actions
  * Actions: **Edit**, **Delete**, **Use**

* **Create/Edit Template** (`/templates/new` or `/templates/:id/edit`)

  * Form fields:

    * Template Name (required)
    * Prompt Type (dropdown)
    * Model (dropdown)
    * Draft Prompt (text area)
  * Buttons: **Save**, **Cancel**

### API Endpoints

* `GET /api/templates` → list templates
* `POST /api/templates` → create template
* `GET /api/templates/:id` → fetch single
* `PUT /api/templates/:id` → update
* `DELETE /api/templates/:id` → remove

---

## 4. Administrator Backend

### Provider Management

* **Admin Page** (`/admin/providers`)

  * Table of AI providers: Name, Status (active/inactive), Default flag
  * Actions: **Activate**, **Deactivate**, **Set Default**

* **API Endpoints**:

  * `GET /api/admin/providers`
  * `PUT /api/admin/providers/:providerId` → toggle status or set default

### Usage Metrics

* **Dashboard** (`/admin/metrics`)

  * Displays charts for:

    * Requests per provider (time series)
    * Error rates
    * Average latency
  * Filters: time range selector

* **API Endpoints**:

  * `GET /api/admin/metrics?provider=<id>&from=<date>&to=<date>`

---

## 5. Frontend MVP Outline

### Tech Stack & Architecture

* **Framework:** Next.js (React)
* **Styling:** Tailwind CSS
* **State:** React Context / Redux (for auth & templates)
* **Data Fetching:** SWR or React Query

### Pages & Components

1. **Login Page** (`/login`)
2. **Dashboard** (`/`) – summary of recent prompts and usage
3. **Prompt Editor** (`/editor`)

   * `<PromptTypeSelector />`, `<ModelSelector />`, `<PromptInput />`, `<DraftViewer />`, `<RegenerateButton />`
4. **Templates** (`/templates`)

   * `<TemplateList />`, `<TemplateForm />`
5. **Admin** (`/admin/providers`, `/admin/metrics`)

   * `<ProviderTable />`, `<MetricsChart />`

### Navigation & Layout

* **Header**: logo, navigation links, profile dropdown
* **Sidebar (desktop)**: collapsible, highlights current section
* **Mobile**: hamburger menu toggles sidebar

### Next Steps

* Create API route stubs for templates and admin
* Build Prompt Editor component with mock data
* Integrate OAuth flows
* Setup theme toggle context
