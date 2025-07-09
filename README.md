# queryve

**A prompt-as-a-service micro-AI platform.**

queryve provides a simple API and tooling to manage, version, and serve AI prompts as a micro-service for your applications.

## Repository Structure

```text
├── src/             # Application source code
├── tests/           # Automated test suites
├── docs/            # Project documentation
├── scripts/         # Utility and build scripts
├── configs/         # Configuration files and templates
├── package.json     # Node.js dependencies & scripts
└── package-lock.json# Locked dependency tree
```

## Usage

*To regenerate the sitemap after adding or removing pages:*

```bash
npm run generate-sitemap
```

## API Endpoints

### GET /api/prompts

Retrieves all prompts.

* **URL:** `/api/prompts`
* **Method:** `GET`
* **Success Response:**

  * **Code:** `200 OK`
  * **Content:** `{ prompts: [ { id, text }, ... ] }`

### POST /api/prompts

Creates a new prompt.

* **URL:** `/api/prompts`
* **Method:** `POST`
* **Body:**

  * `text` (string, required)
* **Success Response:**

  * **Code:** `201 Created`
  * **Content:** the newly created prompt object `{ id, text }`
* **Error Responses:**

  * **Code:** `400 Bad Request`

    * **Content:** `{ error: 'Text field is required' }`

### DELETE /api-prompts/\:id

Deletes the prompt with the given ID.

* **URL:** `/api/prompts/:id`
* **Method:** `DELETE`
* **URL Params:**

  * `id` (integer) — ID of the prompt to delete
* **Success Response:**

  * **Code:** `200 OK`
  * **Content:** the deleted prompt object `{ id, text }`
* **Error Responses:**

  * **Code:** `404 Not Found`

    * **Content:** `{ error: 'Prompt not found' }`
