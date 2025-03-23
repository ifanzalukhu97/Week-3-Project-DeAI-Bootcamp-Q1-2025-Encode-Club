# Story Telling App

## Project Description

The Story Telling App is a web application that allows users to generate captivating stories by selecting genres and tones. Users can also create and manage characters to be included in the stories. The app leverages AI to generate unique and imaginative stories based on user inputs.

## Features

- **Genre and Tone Selection**: Users can customize the story by selecting from various genres and tones.
- **Character Management**: Users can add, edit, and delete characters, each with a name, description, and personality.
- **Story Generation**: The app generates stories using user-selected genres, tones, and characters.
- **Character Role Summary**: After generating a story, the app provides a summary of each character's role in the story.
- **Model Testing**: The app allows testing different AI models for story generation, comparing their outputs, and evaluating their performance.

## Setup Instructions
1. **Prerequisites**
   - Node.js v20 or higher
   - LLM Loader / text-generation-webui already installed on your local machine
   - Run the text-generation-webui and don't forget to add the flag --api to enable the API (ref: [Text Generation WebUI API](https://github.com/Encode-Club-AI-Bootcamp/DeAI/blob/main/Lesson-11/exercises/04-Using-API.md))
   - Ensure the API is running at http://127.0.0.1:5000/docs

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/ifanzalukhu97/Week-3-Project-DeAI-Bootcamp-Q1-2025-Encode-Club
   cd story-telling-app
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

## Todo
1. **Setup Project**: done by Ifan ✔️
2. **Create View**:
    - Allow users to add, edit, and delete characters
    - Allow users to add character name, description, and personality
    - Display the generated story result
3. **Connect View to Prompt and Local LLM**: Provide a summary
4. **Test Different Models**:
    - **Evaluate Model Performance**: Test different models to see how well they remember user-created characters.
    - **Experiment with Context Window Sizes**: Observe the impact of different context window sizes on the story output.
    - **Test Models of Varying Sizes**: Compare the outputs of models of different sizes to understand their influence on the story quality.
5. **Update README**

## Contributor Notes
- Ensure there are no errors before committing the code. You can check for any errors by running `npm run build`.
- Pull the latest changes before committing to avoid conflicts.
- Ensure there are no conflicts before pushing the code to the repository.
- Add the contributor name and Unique ID in the `README.md` file.


## Contributors for Form Submission
- [ifanzalukhu97](https://github.com/ifanzalukhu97) (Unique ID: S3lFve)
-  
- ADD more later
