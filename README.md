# Life Caddie Estimator App

An early-stage AI project focused on building a fully-functioning **image-recognition application** capable of generating **organizing estimates** from photos of cluttered rooms. The long-term goal is to use computer vision and AI reasoning to help users quickly evaluate how much time, effort, or professional assistance may be needed to organize a space.

Planned future capabilities:

* Accepting image inputs (JPEG/PNG)
* Detecting clutter types, objects, and layout information
* Estimating organization effort, time, and resource requirements
* Exporting structured summaries or reports
* Providing optional visual overlays or heatmaps for clutter
* Web or mobile frontend

## 📁 Project Structure ~currently~

```
Estimator
├── src/                # Project files
│   └── assets/         # Supporting files i.e. images        
│   └── context.md
│   └── estimator.py    # Main driver file
└── .gitignore          # Ignored files for github
└── README.md           # Project documentation
└── requirements.tx     # Library and project additions
```

## Requirements

* Python 3.12.3 (recommended)
* Check the __requirements.txt__ file for specific libraries
* OpenAI API key

## Future Roadmap

* **Image Upload Pipeline**
  * Accept photo input (using local paths)
  * Turn towards image upload
  * Finalize with front-end input for the image
* **Image Recognition**
  * Detect clutter zones, classify items, measure density
* **Estimation Engine**
  * AI-driven scoring for difficulty, time, manpower, and organizational method
  * Work directly with Life Caddie leaders to increase estimation precision
* **UX/UI**
  * Front end for adding images, context, and displaying estimated results
* **Model Fine-Tuning**
  * Improve accuracy with custom imagesets and before-afters

## Getting Started

If you want to get the project working locally.. do this:

### 1. Clone the Repository

First, clone the project repository to your local machine using Git:

```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```

Replace `<REPOSITORY_URL>` with the actual URL of the repository.

### 2. Install Python Dependencies

Make sure you have Python installed (preferably Python 3.9+).

All required Python libraries are listed in the `requirements.txt` file. Install them using:

```bash
pip install -r requirements.txt
```

It is recommended to use a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Create a `.env` File and Add Your API Key

The project uses environment variables to manage sensitive information such as API keys.

1. Create a `.env` file in the root directory of the project:

```bash
touch .env
```

2. Add your API key to the `.env` file:

```env
API_KEY=your_api_key_here
```

Make sure **not** to commit the `.env` file to version control. It should be included in `.gitignore`.

---

You are now ready to start working on the project! Run `estimator.py` to recieve an estimation on the provided image!
