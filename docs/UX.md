# UX & Feature Spec

## 1. User Authentication & Profile Menu
- Sign up / Login via Google, Facebook, etc.
- Profile dropdown:
  - Upgrade Plan
  - Customize
  - Help
  - Account Settings (theme: light/dark/system)
  - Log Out

## 2. Prompt Creation Flow
- Select prompt type (character, technicality, model, task)
- Enter brief idea / keywords
- AI generates draft prompt
- User comments / refines → regenerate loop
- Auto-save & auto-submit draft on reload/close

## 3. Template Management
- Save customized prompts as named templates
- List, edit, delete templates
- Assign templates to models/tasks

## 4. Administrator Backend
- Admin-only UI to select AI provider (OpenAI, Anthropic, etc.)
- View usage metrics per provider

## 5. Frontend MVP Outline
- Basic React/Next.js app
- Pages: Login, Dashboard, Prompt Editor, Templates, Admin
